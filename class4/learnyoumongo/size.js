/**
 * Created by nick on 2017/8/3.
 */
'use strict'
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

let age = parseInt(process.argv[2]);

mongo.connect(url, function (err, db) {
    if (err) throw err;
    const cols = db.collection('parrots');
    cols.count({
        age: {
            $gt: age
        }
    }, function (err, count) {
        if (err) throw err;
        console.log(count);
        db.close();
    })
})