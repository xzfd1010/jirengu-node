/**
 * Created by nick on 2017/7/29.
 */

var express = require('express');
var app = express();

var r1 = express.Router();
r1.get('/', function (req, res, next) {
    console.log('r1 called');
    next();
});

var r2 = express.Router();
r2.get('/', function (req, res, next) {
    console.log('r2 called');
    res.end('haha');
    next();
});

app.use(r1, r2);

app.listen(3000);