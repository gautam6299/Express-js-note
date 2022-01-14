// Note
//i. findByIdAndDelete(),deleteOne(),deleteMany.. function are used to delete document


import express from "express";
import connectdb from "./db/connectdb.js";
const app=express();

// import {deleteDonById} from "./models/student.js"
// import {deleteOne} from "./models/student.js"
import {deleteMany} from "./models/student.js"

let dataBaseurl=process.env.DATABASE_URL || "mongodb://localhost:27017";
// data base connection
connectdb(dataBaseurl);

//calling function to delete
// deleteDonById("61cfba7a95b6e604deb6e3b4");
// deleteOne("61cfba7a95b6e604deb6e3b8");
deleteMany(30);
const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})