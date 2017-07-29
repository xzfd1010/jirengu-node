/**
 * Created by nick on 2017/7/23.
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// const Router = express.Router(); //router和app的用法很像

const simpleRouter = require('./router');
const anotherRouter = require('./another_router');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/simple/', simpleRouter, anotherRouter);
// app.use('/simple/', anotherRouter);


// use
// route
// get post patch delete 等方法

// 代表使用在这个路径之下使用这样一个中间件处理它。哪个？？
// app.use('/', (req, res ,next) => {
//     res.json({msg: "use"});
// });




// next代表移交给注册在同一个中间栈中的下一个中间件来处理，在当前的上下文中，把req传递下去。
// 作用
//     可以处理登录系统，把登录信息挂载到req／res中
//     res.locals中也可以存进去
//
// next只接受一个参数，不是req／res，只能是next('route') 或者 next(new Error('xxx'))，后一种会直接进行错误回调函数
// next(new Error('something'))
function mw1(req, res, next) {

    req.user = {name: 'nick'};

    console.log('mw1 called');
    // console.log(JSON.stringify(req.query));
    // next();
    next(new Error('something wrong'));
    // res.json({msg:"mw1 called"});
}

function mw2(req, res, next) {
    console.log('mw2 called');
    // res.json({msg: "mw2 called"});
    // console.log(JSON.stringify(req.query));
    console.log(JSON.stringify(req.user));

    res.json({msg: 'done'});
}

app.get('/', (req, res) => {
    res.json({msg: "get"});
    // return res.send(JSON.stringify({code: 1}));
    // console.log(`method:${req.method}`);
    // console.log(JSON.stringify(req.query));
    // console.log(req.query.username);
    // console.log(req.params);
    // console.log(req.params.name);
    // console.log(req.params.age);
    // console.log(req.params.duang);
    // console.log(req.get('Accept'));
    // return res.json({code: 0});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({code: 0, msg: "done"});
});

// 错误处理中间件放在最后一个，此时next不能省略
app.use((err, req, res, next) => {
    res.status(401);
    // console.log(err.stack); //这又是什么

    // 依然要返回错误
    res.json({code: -1, msg: err.message});
    console.log(`first err middleware called, msg:${err.message}`);
    next(err);//再传给下一个错误处理函数
});

app.use((err, req, res, next) => {
    console.log(`second err middleware called, msg:${err.message}`);
});

app.listen('8081', () => {
    console.log('listening port 8081');
});
