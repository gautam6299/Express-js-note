
import express from "express";
// import mongoose from "mongoose";
import connectdb from "./db/connectdb.js";
const app=express();
let dataBaseurl="mongodb://localhost:27017/text";

// easy way to add with database but not bestWay to add this way
// mongoose.connect("mongodb://localhost:27017/text").then(()=>{
//     console.log("connected");
// })

connectdb(dataBaseurl);

const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})