const { response } = require('express');
const express=require('express');
require('dotenv').config();
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello from main page!!");
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom');
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login to Chai aur Code</h1>');
})

app.get('/chai',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>');
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${port}`);
})