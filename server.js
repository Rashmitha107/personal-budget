const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'))

app.get('/hello',(req,res)=>{
    res.send('Hello world');
});

const myBudget = require("./budget.json");

app.get('/Budget',(req,res)=>{
    res.json(myBudget);
});

app.listen(port,()=>{
    console.log('Example app listening at http://localhost:',port)
});