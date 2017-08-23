'use strict';

// await后面可以是同步函数

async function foo() {
    return await bar()

}

function bar() {
    return 'bar called';
}

foo()
    .then(console.log);



