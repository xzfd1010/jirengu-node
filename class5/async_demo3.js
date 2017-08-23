'use strict';

async function foo1() {
    return await bar1()
}

async function foo2() {
    return await bar2()
}

function bar1() {
    return Promise.resolve('bar1 called');
}

function bar2() {
    return Promise.resolve('bar2 called');
}

// foo2().then(console.log);
//
// foo1().then(console.log);

(async () => {
    //foo2在foo1执行完之前是不会执行的
    // let foo = await foo1();
    // if (!foo) {
    //     await foo2();
    // }

    // 但如果foo1和foo2是完全不相干的函数，这样写就是有问题的，此时foo2要等foo1执行完才会执行
    // 此时使用
    let p1 = foo1();
    let p2 = foo2();
    console.log('1');
    console.log(p1);
    console.log(p2);
    let r = await Promise.all([p1, p2]);
    if(r.length === 2){
        // await foo3(); // 只有在p1，p2都执行完毕时，进入新的流程
    }
    return r;
})()
    .then(r => {
        console.log(r);
    })
    .catch(e => {

    })