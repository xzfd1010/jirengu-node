function withCallback1(params,cb) {
    if(params) {
        return cb(null, 'done');
    }else{
        return cb(new Error('error'));
    }
}

function withCallback2(params,cb) {
    if(params) {
        return cb(null, 'done');
    }else{
        return cb(new Error('error'));
    }
}

module.exports = {
    withCallback1,
    withCallback2
}