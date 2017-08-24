'use strict';

const http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];

let getRes = function (url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk.toString();
            });

            res.on('end', () => {
                return resolve(data);
            });
        }).on('error', (error) => {
            reject(error);
        })
    })
};

(async () => {
    let p1 = getRes(url1);
    let p2 = getRes(url2);
    let result = await Promise.all([p1, p2]);
    let resultObj = {requestOne: result[0], requestTwo: result[1]};

    return resultObj;
})()
    .then(r => {
        console.log(r);
    })
    .catch(e => {

    });


