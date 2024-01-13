const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/',(req,res)=>{
    // res.send("Hi");
    const name = "Bhargov";
    res.render('home',{username:name})
})



app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit',{subreddit})
})

app.get('/condition/:num',(req,res)=>{
    const {num} = req.params;
    res.render('condition',{num})
})

app.get('/dogs',(req,res)=>{
    const dogs =[
        'a','b','c'
    ]
    res.render('dogs',{dogs})
})


app.listen(3000,()=>{
    console.log('Running on port number 3000');
})