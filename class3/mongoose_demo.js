/**
 * Created by nick on 2017/7/27.
 */
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/class3';

const db = mongoose.createConnection(uri);

db.onOpen((err, result) => {
    console.log(err);
    console.log(result);
    console.log('connection created');
});

db.onClose((err, result) => {
    console.log(err);
    console.log(result);
});

db.on('error', (err, result) => {
    console.log(err);
    console.log(result);
})