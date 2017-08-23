// promise三种状态：pending resolved rejected
// promise的回调相对清晰，但对于回调的处理还是不是很有优势，有优势的还是async/await，co-generator
// let p = new Promise((res, rej) => {
//     // res('duang');
//     // rej(new Error('wrong'));
//     User.createNewUser(params, (e, r) => {
//         if (e) {
//             reject(e);
//             return;
//         }
//         if (r) {
//             resolve(r);
//             return;
//         }
//     })
// })
//     .then(r => {
//         // console.log(r);
//         if (r.somehow) {
//             return new Promise((rl, rj) => {
//                 dealWithName();
//                 rl(r)
//             })
//         }
//         return Promise.resolve(r)
//     })
//     .then()
//     .then()
//     .catch(e => {
//         console.log(e);
//     });
//
// console.log(global.Promise);