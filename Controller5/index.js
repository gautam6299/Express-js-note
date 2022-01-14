// note
//i. concept= make controller folder and write businnes logic in there
//example
import express from 'express'
import student from "./routes/student.js"
const app=express();
app.use("/student",student);

app.listen(3000,()=>{
    console.log(`ServerRunning at port 4000`);
})