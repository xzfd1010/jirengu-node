/**
 * Created by nick on 2017/7/26.
 */
const http = require('http');
const server = http.createServer(); //引入http模块

server.listen(3000);

server.on('request', (req, res) => {
    // console.log("message.headers:");
    // console.log(req.headers);
    // console.log("message.httpVersion:");
    // console.log(req.httpVersion);
    // console.log("message.method:");
    // console.log(req.method);
    // console.log("message.rawHeaders:");
    // console.log(req.rawHeaders);
    // console.log("message.rawTrailers:");
    // console.log(req.rawTrailers);
    // console.log("message.socket");
    // console.log(req.socket);
    // console.log("message.statusCode");
    console.log(req.statusCode);
    console.log("message.url:", req.url);
});