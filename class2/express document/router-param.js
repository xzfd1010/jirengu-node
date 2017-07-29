/**
 * Created by nick on 2017/7/29.
 */
var express = require('express');
var app = express();
var router = express.Router();

router.param('id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE');
    next();
});

router.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});

router.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});

app.use(router);

app.listen(3000);