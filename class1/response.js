/**
 * Created by nick on 2017/7/26.
 */
const http = require('http');
const server = http.createServer(); //引入http模块

server.listen(3000);
server.on('request', (req, res) => {
    const body = 'hello world';
    // res.writeHead(200, {
    //     'Content-Length': Buffer.byteLength(body),
    //     'Content-Type': 'text/plain'
    // });
    res.setHeader('Foo', 'bar');
    res.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
    res.setHeader('Content-Type', 'text/html');
    const headers = res.getHeaders();
    console.log('response.headers');
    console.log(headers);



    // console.log('response.connection:');
    // console.log(res.connection);

    console.log('response.finished:');
    console.log(res.finished);
    res.write(body);
    res.end();

    console.log('response.statusCode:');
    console.log(res.statusCode);
    console.log('response.statusMessage:');
    console.log(res.statusMessage)
    console.log('response.finished:');
    console.log(res.finished);

    const contentType = res.getHeader('content-type');
    console.log(contentType);
})