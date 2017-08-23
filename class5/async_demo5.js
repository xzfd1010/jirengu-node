'use strict';
// 超时处理
async function foo1() {
    return await bar1()
}

async function foo2() {
    return new Promise((rl,rj)=>{
        setTimeout(() => rl('aaa'), 5000);
    })
}

function bar1() {
    return Promise.resolve('bar1 called');
}

function bar2() {
    return 'bar2 called';
}

(async () => {
    let p1 = foo1();// p1和p2的定义顺序影响返回结果，而非字符串/resolve
    let p2 = foo2();
    console.log('1');
    let r = await Promise.race([p2, p1]);
    if (r.length === 2) {
        // await foo3(); // 只有在p1，p2都执行完毕时，进入新的流程
    }
    return r;
})()
    .then(r => {
        console.log(r);
    })
    .catch(e => {

    });