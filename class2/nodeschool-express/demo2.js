//static中间件
'use strict';
const express = require('express');
const path = require('path');
const app = express();

let port = +process.argv[2];
let myPath = process.argv[3];

app.use(express.static(myPath || path.join(__dirname, 'public')));

app.listen(port);