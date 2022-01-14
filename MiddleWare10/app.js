//Note
//i. MiddleWare can be applied in two way= application level and  Roter level
//ii. build in middle ware are=exprss.static 
//code

import express from "express"
const app=express();
const port=process.env.PORT || 3000;
import web from "./routes/web.js ";
import student from "./routes/student.js"
// import {logger} from "./middleware/logger-moddleware.js";
 
//Application level middleware 
app.use(logger); // sabai ko lagi run hunxa
app.use('/about',logger); //use only for about
//use of routes

app.use('/',web); 
app.use('/student',student);

//set template engine
// app.set('view','./views');
app.set('view engine','ejs');
app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})