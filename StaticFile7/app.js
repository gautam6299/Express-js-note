//note
//i. css,js,image file,video files etc are considered as static file in express js
// ii. to solve this problem= use the express.static build-in middleware function in express
// example= make public folder for=css,img,js..etc and use express.static('public');

//code
import  express  from "express";
import {join} from 'path'
import home from "./routes/home.js"
const app=express();

// static file
// app.use(express.static('public'));  // use all floder inside the public
app.use(express.static(join(process.cwd(),'public'))) 
//virtual path
app.use('/static',express.static(join(process.cwd(),'public')))

app.use('/css',express.static(join(process.cwd(),'public/css'))) // only use css inside of public folder

//use routes
 app.use('/home',home);
app.listen(3000,()=>{
    console.log(`ServerRunning at port 300`);
})

//10min baki xa