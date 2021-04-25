require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT;
app.listen(port, ()=>{
console.log('Server is listing on port '+port)
})