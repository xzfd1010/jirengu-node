//json
'use strict';

const express = require('express');
const fs = require('fs');

const app = express();

let port = process.argv[2];
let filename = process.argv[3];

app.get('/books', (req,res) => {
    fs.readFile(filename,(err,data)=>{
        let obj = JSON.parse(data);
        res.json(obj);
        res.end();
    })
});

app.listen(port);

