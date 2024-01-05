const express = require("express");
const app = express();

// app.use(()=>{
//     console.log("We got a new request...");
//     // http://localhost:8000
// })


// app.use((req,res)=>{
//     console.log("We got a new request...");
//     res.send('<h1>This is my webpage</h1>')
// })


app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/dog',(req,res)=>{
    res.send('dog page')
})


app.post('/cat',(req,res)=>{
    res.send('cat request')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`Browing the ${subreddit} subreddit.`)
})

app.get('/r/:name/:roll',(req,res)=>{
    const {name,roll} = req.params;
    res.send(`Student name is ${name} and roll is ${roll}.`)
})


// Query string

app.get('/search',(req,res)=>{
    const {q} = req.query;
    res.send(`Your query is ${q}`)
})


app.get('*',(req,res)=>{
    res.send('i dont know the path')
})

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})