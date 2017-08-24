const http = require('http');
const async = require('async');
const qs = require('querystring');

let hostname = process.argv[2];
let port = process.argv[3];
let path = '/users/create';
let url = 'http://' + hostname + ':' + port + '/users';

async.series({
        post: function (done) {
            async.times(5, (n, next) => {
                let user = JSON.stringify({'user_id': ++n});
                postUser(user, (err) => {
                    next(err);
                });
            }, function next(err) {
                if (err) return done(err);
                done(null, 'saved');
            })
        },
        get: function (done) {
            http.get(url, function (res) {
                let body = "";
                res.on('data', function (chunk) {
                    body += chunk.toString();
                });

                res.on('end', function () {
                    done(null, body);
                });
            }).on('error', done);
        }
    },

    function done(err, result) {
        if (err) return console.error(err);
        console.log(result.get);
    }
);

function postUser(user, next) {
    // An object of options to indicate where to post to
    let postOptions = {
        hostname: hostname,
        port: port,
        path: path,
        method: 'POST',
        headers: {
            'Content-Length': user.length
        }
    };

    // Set up the request
    let post_req = http.request(postOptions, function (res) {
        res.on('data', function (chunk) {
        });
        res.on('end', function () {
            next();
        })
    });

    post_req.on('error', (err) => {
        next(err)
    });

    // post the data
    post_req.write(user);
    post_req.end();

}

