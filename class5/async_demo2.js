'use strict';

async function foo() {
    return await bar()

}

function bar() {
    return Promise.resolve('bar called');
}

foo()
    .then(console.log);

