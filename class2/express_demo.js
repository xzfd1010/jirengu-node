/**
 * Created by nick on 2017/7/23.
 */

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log(req);
    console.log(res);
    return res.json({code: 0});
})

app.listen('8081',() =>{
    console.log('listening port 8081');
})
