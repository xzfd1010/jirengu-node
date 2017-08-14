/**
 * Mongoose#createConnection([uri], [options], [options.config], [options.config.autoIndex], [options.useMongoClient])
 */
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri = 'mongodb://localhost:27017/class3';

const db = mongoose.createConnection(uri);

const UserSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, max: [90, 'Nobody over 90 could use postman']}
});

const UserModel = db.model('user', UserSchema);

db.on('error', console.error.bind(console, '连接错误:'));

db.once('open', () => {
    console.log('connection created');
    let userId = "598421dbfa30bf451c2b5d82";
    UserModel.findById(userId, function (err, result) {
        console.log(result);
    });
});

