//模板引擎
'use strict';
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();

let port = +process.argv[2];
let myPath = process.argv[3];

app.set('views', myPath || path.join(__dirname, 'run/views'));

app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port);