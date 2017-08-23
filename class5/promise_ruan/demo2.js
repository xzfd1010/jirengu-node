// setTimeout的第3-n个参数，是回调函数的参数
function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});