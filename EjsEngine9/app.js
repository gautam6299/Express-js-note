//note
  //i. under ejs= you can write variable,if else,function etc
//code
// @@@=> variable,function..etc define garna baki xa

// important thing= make a navigation as a componend and and include=><%-include('./particals/natigation.js') %>
import  express  from "express";
import {join} from 'path'
import home from "./routes/home.js"
import about from './routes/about.js'
const app=express();

// view engine set
// app.set('view', './views');
app.set('view engine','ejs');

//use routes
 app.use('/home',home);
 app.use('/about',about);
app.listen(3000,()=>{
    console.log(`ServerRunning at port 300`);
})

//10min baki xa