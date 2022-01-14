// note 
//i. use find method to retrive data

import express from "express";
import connectdb from "./db/connectdb.js";
const app=express();
let dataBaseurl=process.env.DATABASE_URL || "mongodb://localhost:27017";
// import {getAllDoc} from "./models/student.js"
// import {getAllDocumentSecificfield} from "./models/student.js"
import {getSingleDocment} from "./models/student.js"
// data base connection
connectdb(dataBaseurl);

const port=process.env.PORT || 3000;

// calling getAllDoc
//  getAllDoc();
// getAllDocumentSecificfield();
getSingleDocment();

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})