/**
 * Created by nick on 2017/7/30.
 */
var mongoose = require('mongoose');

// 打开mongoose连接
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection; //获取默认连接

db.on('error', console.error.bind(console, 'connection error:'));//错误处理

//连接时的callback
db.once('open', function () {
// 创建Schema
    var kittySchema = mongoose.Schema({
        name: String
    })

    kittySchema.methods.speak = function () {
        var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
        console.log(greeting);
    }

// 将Schema编译成Kitten model
    var Kitten = mongoose.model('Kitten', kittySchema);

// 创建实体 Entity
    var silence = new Kitten({name: 'Silence'});
    console.log(silence.name);
    silence.save();// 存储到silence中

    var fluffy = new Kitten({name: 'fluffy'});
    fluffy.speak();

// 存到数据库中
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();
    })

// // 获取所有documents
//     Kitten.find(function (err, kittens) {
//         if (err) return console.error(err);
//         console.log(kittens);
//     })

// 查找一条数据
    Kitten.find({name: /^fluff/}, function (err, kittens) {
        console.log(kittens);
        db.close();
    });


});