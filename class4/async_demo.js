/**
 * Created by nick on 2017/7/30.
 */
function asyncFoo(params, cb) {
    if (!params) {
        cb(new Error('no param!'))
    } else {
        cb(null, 'Great!');
    }
}

asyncFoo(null, (err, result) => {
    console.log(`err ${err}`);
    console.log(`result ${result}`);
});

asyncFoo({}, (err, result) => {
    console.log(`err ${err}`);
    console.log(`result ${result}`);
});

// callback hell
let r = 'callback hell';

asyncFoo(null,(e,r)=>{
    if(e) asyncFoo({},(e,r)=>{
        if(e) asyncFoo({},(e,r)=>{
            if(e) asyncFoo({},(e,r)=>{
                if(e) asyncFoo({},(e,r)=>{
                    // 超多层级的回调
                })
            })
        })
    })
})