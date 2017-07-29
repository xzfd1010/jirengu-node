/**
 * Created by nick on 2017/7/28.
 */

var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade')
// app.engine('html', require('ejs').renderFile);
// app.engine('html', require('ejs').renderFile);
// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
    // 如果 user id 为 0, 跳到下一个路由
    console.log(req.params.id);
    if (req.params.id == 0) next('route');
    // 否则将控制权交给栈中下一个中间件
    else next(); //
}, function (req, res, next) {
    // 渲染常规页面
    res.render('regular');
});

// 处理 /user/:id， 渲染一个特殊页面
app.get('/user/:id', function (req, res, next) {
    res.render('special');
});

app.listen(3000);