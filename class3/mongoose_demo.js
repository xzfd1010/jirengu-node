/**
 * Created by nick on 2017/7/27.
 */
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/class3';

// 创建一个连接实例
mongoose.connect(uri, {useMongoClient: true})
const db = mongoose.connection;

// 替换mongoose中的promise / bluebird
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

//schema
const UserSchema = new Schema({
    // unique属性不是依赖于mongoose本身的实现，而是依赖mongo本身的索引实现的，enum？？
    // 还可以指定validator
    name: {type: String, required: true, unique: true, enum: ['nick', 'michael']},
    age: {type: Number, max: 90, min: [1, 'nobody could be younger than 1 year old']}
});

// 创建对象的实例方法
UserSchema.methods.sayYourName = function () {
    return this.name;
};

// 静态方法
UserSchema.statics.findByName = async function (name) {
    return await this.findOne({name: name});
}

// model
const UserModel = mongoose.model('user', UserSchema);

(async (params) => {
    // 创建对象
    // let created = await UserModel.create({
    //     name: 'nick',
    //     age: 25
    // }).then(); // mpromise
    // return created;

    // 测试自身的实例方法
    // let found = await UserModel.findOne({});
    // console.log(found.sayYourName());

    // 测试静态方法
    // let found = await UserModel.findByName('nick');
    // return found;

    // 测试存储校验条件
    // let user = new UserModel({name: 'nick',age:10});
    // await user.save();
    // return user;

    let flow = UserModel.find({});
    flow.where('age').lt(90);
    flow.select({name: 1});//projection
    flow.skip(0);
    // 好处：可以根据参数动态构造查询过程
    if (params.sort) {
        flow.sort(params.sort);
    }
    let r = await flow.then();
    return r;

})({
    sort: '-age'
})
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log(e.stack);
    });

db.once('open', (err, result) => {
    // console.log('connection created');
});

db.on('error', console.error.bind(console, 'connection error:'));//错误处理
