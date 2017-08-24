//既然原生已经有了async，就用原生的async实现了。
'use strict';
const http = require('http');
const fs = require('fs');

let path = process.argv[2];

let readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

let getUrl = function (url) {
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
    });
};


(async () => {
    let url = await readFile(path);

    let data = await getUrl(url);

    console.log(data);

})();
