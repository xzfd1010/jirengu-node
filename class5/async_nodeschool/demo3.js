const http = require('http');
const async = require('async');

let urls = [process.argv[2], process.argv[3]];

async.each(urls, function (url, done) {
        let req = http.get(url, function (res) {
            res.on('data', function (chunk) {
            });
            res.on('end', function () {
                return done();
            });
        });
        req.end();
    },
    function (err) {
        if (err) console.log(err);
    });

