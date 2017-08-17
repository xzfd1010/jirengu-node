// 使用stylus middleware为HTML添加css，此例只返回了css文件
'use strict';
const express = require('express');
const stylus = require('stylus');
const path = require('path');

const app = express();

let port = process.argv[2];
let dir = process.argv[3];

// 使用stylus middleware
app.use(stylus.middleware(dir || __dirname + '/public'));

// static目录
app.use(express.static(dir || path.join(__dirname, 'public')));

app.listen(port);
