// cookie
//-> A cookie is a small pieces of text data set by web server that resided on the client machine.
//-> types
//i.Session cookies=> it is destroyed when the user quits the brower
//ii. persistent Cookies=> The browser keeps it up until their expiration date is reached.
//cookies in express= npm i cookie-parser

//example
//i. set cookie
//ii.get cookie
//iii. deletecookie

import express from "express"
const app=express();
import cookieParser from "cookie-parser";
const port=process.env.PORT || 3000;
import web from "./routes/web.js"

//use cookie Parser
app.use(cookieParser());

//routes
app.use('/',web);

app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})