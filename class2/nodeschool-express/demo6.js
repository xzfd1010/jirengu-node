// 处理形如 '/message/:id' 请求的参数

'use strict';
const express = require('express');
const crypto = require('crypto');

const app = express();

let port = process.argv[2];

app.put('/message/:id', (req, res) => {
    let id = req.params.id;
    let has = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
    res.end(has);
});

app.listen(port);