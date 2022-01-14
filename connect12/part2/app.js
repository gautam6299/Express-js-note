// note
//i. mongoose li import garna aani connect garna

import express from "express";
import connectdb from "./db/connectdb.js";
const app=express();
let dataBaseurl=process.env.DATABASE_URL || "mongodb://localhost:27017";

// data base connection
connectdb(dataBaseurl);

const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})