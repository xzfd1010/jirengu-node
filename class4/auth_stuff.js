/**
 * Created by nick on 2017/7/30.
 */
'use strict';
const util = require('util');
const JWT = require('jsonwebtoken');
const SECRET = 'first json web token demo';
const crypto = require('crypto');
const fs = require('fs');
const bluebird = require('bluebird');

let token = JWT.sign({
    userId: "nickarron",
    iat: Date.now(),
    expire: Date.now() + 24 * 60 * 60 * 1000
}, SECRET);

// console.log(token);

let verified = JWT.verify(token, SECRET);

// console.log(verified);

// 此处使用util实现转为async模式
// let pbkdf2Async = util.promisify(crypto.pbkdf2);

// 使用bluebird方式转换为async模式
let pbkdf2Async = bluebird.promisify(crypto.pbkdf2);


(async () => {
    return await pbkdf2Async('abcde', 'salt', 100000, 512, 'sha512');
})()
    .then(r => {
        console.log(r.toString());
    })
    .catch(e => {
        console.log(e);
    });

