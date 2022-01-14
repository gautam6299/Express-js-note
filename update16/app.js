// Note
//i. update data by three way=findByIdAndUpdate(),
//II. upset:true => if gievn id is not match then it create new one
//iii. updateMany()
//iv.updateOne

import express from "express";
import connectdb from "./db/connectdb.js";
const app=express();
let dataBaseurl=process.env.DATABASE_URL || "mongodb://localhost:27017";
// import {updateDocById} from "./models/student.js"
import {updateOneDoc} from "./models/student.js"
// data base connection
connectdb(dataBaseurl);

const port=process.env.PORT || 3000;

// calling update function
// updateDocById("61cfba7a95b6e604deb6e3b4");
updateOneDoc("61cfba7a95b6e604deb6e3b8");  // if id not found then it create and insert
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})