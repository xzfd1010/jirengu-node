/**
 * Created by nick on 2017/7/29.
 */
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.json('haha');
    // res.json('hehe');
});

app.listen(3000);