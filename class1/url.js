/**
 * Created by nick on 2017/7/26.
 */
const { URL } = require('url');
const url = require('url');

const myURL1 = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

const myURL2 = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log("myURL1:", myURL1);
console.log("myURL2:", myURL2);