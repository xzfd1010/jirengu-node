/**
 * Created by nick on 2017/8/3.
 */
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

var firstName = process.argv[2];
var lastName = process.argv[3];

var doc = {
    firstName: firstName
    , lastName: lastName
}

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var docs = db.collection('docs');
    docs.insert(doc,function(err,data){
        if (err) throw err;
        // var raw = data.ops[0];
        // delete raw._id;
        // console.log(JSON.stringify(raw));
        console.log(JSON.stringify(doc));
        db.close();
    })
})