const express = require('express');
const CustomArray = require('./src/array');
require('dotenv').config()
const app = express();

app.use(express.json())
const port = process.env.PORT || 5000;
const log = console.log;
log(CustomArray([1,2,44]).isArrayOrNot());
log(CustomArray().lastElement());
const server = app.listen(port, ()=>{
    log(`server running on ${port}`)
})