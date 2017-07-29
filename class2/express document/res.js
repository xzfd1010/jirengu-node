/**
 * Created by nick on 2017/7/28.
 */

const express = require('express');
const app = express();

app.use(function(req,res,next) {
    console.log(req);
    res.send([1, 2, 3]);
})

app.listen(3000);