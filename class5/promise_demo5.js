'use strict';

console.log(3);
let p = new Promise((resolve, reject) => {
    console.log(1);

    setTimeout(() => {
        console.log(7)
    }, 0);

    process.nextTick(() => {
        console.log(6);
        resolve('hey');
    });

    console.log(2);
});

p.then(r => {
    console.log(4);
});

console.log(5);

// 3 1 2 5 6 4 7
