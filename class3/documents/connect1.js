/**
 * connect()方法的使用
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri = 'mongodb://localhost:27017/class3';

mongoose.connect(uri, {useMongoClient: true});

const db = mongoose.connection;

const UserSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, max: [90, 'Nobody over 90 could use postman']}
});

const UserModel = mongoose.model('user', UserSchema);


db.once('open', (err, result) => {
    console.log('connection created');
    let userId = "598421dbfa30bf451c2b5d82";
    UserModel.findById(userId, function (err, result) {
        console.log(result);
    });
});