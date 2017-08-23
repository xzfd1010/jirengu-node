'use strict';

console.log(3);
let p = new Promise((resolve, reject) => {
    console.log(1);

    setTimeout(() => {
        console.log(6);
        resolve('hey');
    }, 0);

    console.log(2);
});

p.then(r => {
    console.log(4);
});

console.log(5);


// 3 1 2 5 6 4