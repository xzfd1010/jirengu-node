/**
 * Created by nick on 2017/8/3.
 */
'use strict';
const MongoClient = require('mongodb').MongoClient;

let dbname = process.argv[2];

const url = "mongodb://localhost:27017/" + dbname;


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let users = db.collection('users');
    users.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function (err,docs) {
        if (err) throw err;
        db.close();
    });
});


