/**
 * Created by nick on 2017/8/3.
 */
'use strict';
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

let size = process.argv[2];

mongo.connect(url,function(err,db){
    if(err) throw err;
    db.collection('prices').aggregate([
        {$match:{size:size}},
        {$group:{
            _id:'average',
            average:{
                $avg:'$price'
            }
        }}
    ]).toArray(function(err,results){
        if(err) throw err;
        if (!results.length) {
            throw new Error('No results found')
        }
        console.log(Number(results[0].average).toFixed(2));
        db.close();
    })
})