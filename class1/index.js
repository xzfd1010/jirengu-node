const http = require('http');
const server = http.createServer(); //引入http模块
const url = require('url');
// const querystring = require('querystring');

// 此处对应的方法
// server.listen([port][,hostname][,backlog][,callback])
server.listen(8200);

// 本例中user的结构 {name:username,address:address}
let users = [];

server.on('request', (req, res) => {
    // req.url：返回请求的 URL 字符串
    // url模块，用于解析url，此处用的是 Legacy API
    const parsedUrl = url.parse(req.url, true);
    // 如果url的path中不含有user，禁止访问
    if (parsedUrl.path.indexOf('/user') === -1) {
        res.statusCode = 403; // 设置响应的状态码
        // 返回响应主体，响应结束
        res.end(`${res.statusCode} not allowed`);
        return; // 这里的return有用么，一会儿测试下
    }
    // 根据请求方法的不同，进行设置
    switch (req.method) {
        case 'GET':
            // /user/的存在代表user后有请求 username
            if (parsedUrl.path.indexOf('/user/') > -1) {
                // 获取username
                let username = parsedUrl.path.substring(6, parsedUrl.path.length);
                /*
                 * 箭头函数
                 * 等价写法：
                 *  function(u){
                 *      return u.name === username;
                 *  }
                 *
                 * 数组的find方法：找出第一个符合条件的数组成员
                 *  参数：回调函数，所有数组成员依次执行该回调函数，知道找出第一个返回值为true的成员，返会该成员；若没有，返回false。
                 *
                 */
                // 作用：查询user[]数组中是否已存在某个对象的 u.username===username，若有返回此user对象
                let user = users.find(u => u.name === username);
                console.log(user);
                res.statusCode = 200;
                // 将user解析为JSON字符串，写入响应，返回
                res.end(JSON.stringify(user));
            }
            // 获取url中的json格式的query
            let query = parsedUrl.query;
            console.log(query);
            // 如果query中有address字段，返回user中所有 u.address和query.address相等 的成员，数组
            // 数组json化后返回
            if (query.address) {
                let found = users.filter(u => u.address === query.address); // 这里是一个数组
                res.end(JSON.stringify(found));
            // 如果没有address字段，返回users数组
            } else {
                res.statusCode = 200;
                res.end(JSON.stringify(users));
                console.log('users');
            }

            break;
        case 'POST':
            // POST请求含有请求体，此例中用POST请求写入user
            let user = '';
            // data事件在流将数据传递给消费者时触发，对于请求来说，就是把请求体传递给servers时触发。
            req.on('data', (buffer) => {
                const userStr = buffer.toString();
                // req.headers是json格式的请求头信息
                let CT = req.headers['content-type'];
                // content-type表示报文主体的对象类型
                if (CT === 'application/json') {
                    // 格式化请求体
                    user = JSON.parse(userStr);
                    console.log(user);
                    // push到数组中
                    users.push(user);
                }
            })
            // end事件在流中没有可消费的数据时触发，对于请求来说，即post请求中的请求体已被读取完毕
            req.on('end', () => {
                // 返回状态码及信息
                // 201状态码代表资源被创建，通常是PUT请求的返回
                res.statusCode = 201;
                res.end('Great! User created!');
            })
            break;
        case 'PATCH':
            // PATCH表示对资源进行修改
            let username = parsedUrl.path.substring(6, parsedUrl.path.length);
            req.on('data', (buffer) => {
                const userStr = buffer.toString();
                let CT = req.headers['content-type'];
                if (CT === 'application/json') {
                    let update = JSON.parse(userStr);
                    // 根据u.name获取要修改的user对象
                    let user = users.find(u => u.name === username);
                    // 修改address
                    user.address = update.address;
                }
            })

            req.on('end', () => {
                res.statusCode = 201;
                res.end('Great! Changes Accepted!');
            })
            break;
        case 'DELETE':
            // 删除某个user
            if (parsedUrl.path.indexOf('/user/') > -1) {
                let username = parsedUrl.path.substring(6, parsedUrl.path.length);
                /*
                 * 数组的findIndex()方法：返回第一个符合条件的数组成员的位置，如果所有成员都不符合，返回-1
                 */
                let index = users.findIndex(u => u.name === username);
                if(index !== -1){
                    users.splice(index, 1);
                    res.statusCode = 200;
                    res.end(JSON.stringify(users));
                }
            }
            break;
    }
});
