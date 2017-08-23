const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
})
    .then(result => result)
    .catch(e => e);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));

// finally方法
// Promise.prototype.finally = function (callback) {
//     let P = this.constructor;
//     return this.then(function (value) {
//         P.resolve(callback()).then(function () {
//             return value;
//         }), function (reason) {
//             P.resolve(callback()).then(function () {
//                 throw reason;
//             })
//         }
//     })
// }
