// search
'use strict';
const express = require('express');

const app = express();

let port = process.argv[2];

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.listen(port);