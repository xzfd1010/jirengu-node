/**
 * Created by nick on 2017/7/30.
 */
const JWT = require('jsonwebtoken');
const SECRET = 'first json web token demo';
const crypto = require('crypto');
const util = require('util');
const bluebird = require('bluebird');

let token = JWT.sign({
    userId: "abcdefg",
    iat: Date.now(),
    expire: Date.now() + 24 * 60 * 60 * 1000
}, SECRET);

console.log(token);

// 设置到cookie中
// res.set('Set-Cookie', ';');

let verified = JWT.verify(token, SECRET);

console.log(verified);

let pbkdf2Async = bluebird.promisify(crypto.pbkdf2);

(async () => {
    return crypto.pbkdf2Sync('abcde', 'salt', 100000, 512, 'sha512');
})()
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log(e);
    });

// 一种算法 (password,salt,
// crypto.pbkdf2('abcde', 'salt', '100000', '512', 'sha512');