'use strict';
let CBStyle = require('bluebird').promisifyAll(require('./cb_style_module'));

(async () => {
    // 因为定义的原因，如果不改造，只能如此调用
    // CBStyle.withCallback1({}, (err, result) => {
    //     console.log(result)
    // })

    // 把原有回调函数变成Promise的一种方式
    // let r = await new Promise((rl, rj) => {
    //     CBStyle.withCallback1(null, (err, res) => {
    //         if (err) return rj(err);
    //         rl(res);
    //     })
    // });
    //
    // return r;



    // util.promisify、bluebird.promisifyAll就是做了这样一件事情

    return await CBStyle.withCallback1Async({})

    // 实际上做的事情
    function withCallback1Async(){
        return new Promise((rl,rj)=>{
            CBStyle.withCallback1(null, (err, res) => {
                if (err) return rj(err);
                rl(res);
            })
        })
    }

})()
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log(e);
    })