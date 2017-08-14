/**
 * Created by nick on 2017/7/30.
 */
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);