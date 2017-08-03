/**
 * Created by nick on 2017/8/3.
 */
var mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function (err, db) {
    var age = parseInt(process.argv[2]);
    // console.log(age);
    // db gives access to the database
    db.collection('parrots').find({"age": {$gt: age}}, {name: 1, age: 1, _id: 0}).toArray(function (err, documents) {
        console.log(documents)
        db.close();
    });

})

