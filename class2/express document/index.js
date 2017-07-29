/**
 * Created by nick on 2017/7/28.
 */

const express = require('express');
const app = express();

app.get("/viewdirectory", require("./mymiddleware.js"));

app.listen(3000);