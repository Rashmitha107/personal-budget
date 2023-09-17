const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'))

const budget = [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 400
    },
    {
        title: 'Groceries',
        budget: 100
    },
    {
        title: 'Commute',
        budget: 100
    },
    {
        title: 'Shopping',
        budget: 100
    },
    {
        title: 'Entertainment',
        budget: 60
    },
    {
        title: 'Insurance',
        budget: 500
    }
]

app.get('/hello',(req,res)=>{
    res.send('Hello world');
});

app.get('/budget',(req,res)=>{
    res.json(budget);
});

app.listen(port,()=>{
    console.log('Example app listening at http://localhost:',port)
});