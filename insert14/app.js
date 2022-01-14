// note 
// steps to insert document into database
//1.connect to the database
//2.Define schema
//3.compile schema= makinking collection
//4.creating document

import express from "express";
import connectdb from "./db/connectdb.js";
const app=express();
import {createDoc} from "./models/student.js"
let dataBaseurl=process.env.DATABASE_URL || "mongodb://localhost:27017";

// data base connection
connectdb(dataBaseurl);

// create and save document
// createDoc('Binod','25',['dancing','reading'],false,[{vaue:'Thid is bad'}]);

// calling multiple document
// createMultiDoc();
createDoc();

const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})