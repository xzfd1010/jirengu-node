const http = require('http');
// const async = require('async');

let urls = [process.argv[2], process.argv[3]];

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
    let p1 = getRes(urls[0]);
    let p2 = getRes(urls[1]);
    let result = await Promise.all([p1, p2]);
    return result;
})()
    .then(r => {
        console.log(r);
    })
    .catch(e => {

    });