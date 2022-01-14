//introduction
//=>Express js is fast,unipinionated,minnimalist web frameworl for Node js.
//i.Create Static,Dynamic and Hybrid web App
//ii.fast and Easy
//iii.middleware
//iv.Rest api 
//v.very populay

// install express js=npm i express@5.0.0-alpha.8
const express =require('express')
const app=express();
const port=process.env || 4000;
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log(`ServerRunning at port ${port}`);
})