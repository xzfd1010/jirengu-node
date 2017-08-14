// 传统callback
function asyncFoo(params, cb) {
    if (!params) return cb(new Error('No param!'));
    else cb(null, 'Great!');
}

asyncFoo(null, (err, result) => {
    console.log(`err ${err}`);
    console.log(`result ${result}`);
});

asyncFoo({}, (err, result) => {
    console.log(`err ${err}`);
    console.log(`result ${result}`);
});

// callback hell，以此为例
// User.createUser(params, (e, r) => {
// // 如果要对user进行校验
//     if (r.name.indexOf('lao') > -1) {
//         dealWithName((e, r) => {
//             dealWithAge((e, r) => {
//                 createCipher(params, (e, r) => {
//                     User.save((e, r) => {
//
//                     })
//                 })
//             })
//             createCipher(params, (e, r) => {
//                 User.save((e, r) => {
//
//                 })
//             })
//         })
//     } else {
//         createCipher(params, (e, r) => {
//             User.save((e, r) => {
//
//             })
//         })
//     }
// })

async function bar() {
    let user = await User.createUser();// await代表返回的是一个异步函数返回值。
    if(user.somehow){
        user = await dealWithName();
        if(user.somehow){
            user = await dealWithName();
        }
    }
    await createCipher();
}