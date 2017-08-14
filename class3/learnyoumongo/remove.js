/**
 * Created by nick on 2017/8/3.
 */
'use strict';
const MongoClient = require('mongodb').MongoClient;

let dbname = process.argv[2];
let colsname = process.argv[3];
let id = process.argv[4];

const url = "mongodb://localhost:27017/" + dbname;

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    let cols = db.collection(colsname);
    cols.remove({
        _id:id
    },function(err,docs){
        if(err) throw err;
        db.close();
    })
});