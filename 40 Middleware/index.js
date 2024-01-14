const express = require("express");
const app = express();

const morgan = require('morgan')
// HTTP request logger middleware
app.use(morgan('tiny'))



// app.use: Run on every request
// app.use(()=>{
// console.log("Hey...")
// })


// app.use((req,res)=>{
//     res.send("Running on every req.")
// })


app.use((req,res,next)=>{
    console.log("This is 1st middleware.")
    return next();
})

app.use((req,res,next)=>{
    console.log("This is 2nd middleware.")
    return next();
})

// On specific route
app.use('/dog',(req,res,next)=>{
    console.log("I love dogs...")
    return next();
})

const verifyPassword = (req,res,next)=>{
    const{password} = req.query;
    if(password === 'admin'){
        next()
    }
    res.send('Sorry you need a password');
}

// app.use((req,res)=>{
//     res.send("Not found")
// })


// app.use((req,res)=>{
//     res.status(400).send("Not found")
// })



app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/dog',(req,res)=>{
    res.send('dog page')
})

app.get('/secret',verifyPassword,(req,res)=>{
    // http://localhost:8000/secret?password=admin
    res.send("This is a secret page...");
})



app.listen(8000,()=>{
    console.log("Listening on port 8000");
})