'use strict';
// then是异步
{
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(1);

        resolve('hey');

        console.log(2);
    });

    p.then(r => {
        console.log(4);
    });

    console.log(5);
}
// 3 1 2 5