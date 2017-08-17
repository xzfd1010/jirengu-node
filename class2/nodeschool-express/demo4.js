// 路由，处理post请求
'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

let port = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    let org = req.body.str;
    let str = org.split('').reverse().join('');
    res.end(str);
});

app.listen(port);



