//note
//views contain the HTML served by your application and separate your application logic form your presentation logic..
//examole=> controller ma= business logic, routes=router, view ma=html

// code
import express from "express";
import home from "./routes/Home.js";
import  about from "./routes/about.js"
const app=express();
app.use("/home",home);
app.use("/about",about);
app.listen(3000,()=>{
    console.log(`ServerRunning at port 4000`);
})