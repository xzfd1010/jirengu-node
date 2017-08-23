'use strict';
let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('Resolved');
});

for (var i = 0; i < 100; i++) {
    console.log('Hi!');
}
