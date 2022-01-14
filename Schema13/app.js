// note
//i. Scheama= A document schema is a JSON object that allow you to define the shape 
//ii. compiling Schema= const mongoose.model('student',studentSchema) // student table made hunxa

//property 
//i. String=lowercase:boolean,  uppercase:boolean  ,trim:boolean

//ii.Number=min:number,  max:number  , enum: Array,  populate:object

// required and option
//i. required:boolean or function
//ii. default:any or function
//iii. select:boolean
//iv.validate:function

import express from "express";
import connectdb from "./db/connectdb.js";
const app=express();
import  "./models/student.js"
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