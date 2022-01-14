//note
//=>Router class is used to create modular,mouantable route handlers
//=>A Router instance is a complete middleware and routing System.
//=>Every Expresss application has a built-in app router
import express from 'express';
import student from "./routes/student.js";
import teacher from "./routes/teacher.js"
let app=express();

app.use('/student',student);
app.use('/teacher',teacher);
app.listen(4000,()=>{
    console.log("serverRunnting at port 3000");
})