//note
//i. A templete engine enables you to use static template files in your application.
//ii. it transfrom the template into an html file sent to the client
//iii.this approach makres it easier to desig an htmml page
///iv. example=> ejs,puge..etc

//set view engine property by=>  app.set('view engine','ejs')
// set view engine=>app.set('view', './views') // ./views if folder name
// install ejs=npm install ejs
//code
import  express  from "express";
import {join} from 'path'
import home from "./routes/home.js"
import about from './routes/about.js'
const app=express();

// static file
app.use(express.static(join(process.cwd(),'public')));

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