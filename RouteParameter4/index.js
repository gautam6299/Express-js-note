//1;note
//i.Route parameters are named url segments that are used to capture the value specified at their position in the URL
//ii.The captured values are populated in the req.params object
//iii. "world character must be"=([A-Za-z0-9]);
//example
//i. /student/:id
//ii./product/:category/:id
//iii./product/order/:year/and/:month
//iv./train/:from-:to
//v. /location/:state.:city

//example
// const express =require('express')
// const app=express();
// app.get('/student/:id',(req,res)=>{ 
//     console.log(req.params); // object like key and value
//     res.send(`Your id is ${req.params.id}`)
// })
// app.get('/product/:category/:id',(req,res)=>{ 
//     console.log(req.params); // object like key and value
//     //object destructuring
//     const {category,id}=req.params;
//     res.send(`My category is ${category} and id is ${id}`)
// })
// app.listen(4000,()=>{
//     console.log(`ServerRunning at port 4000`);
// })

//2, Route parameter with RegX=provide registraction for give parameter
//example
//i. /student/:id([0-9]{2}) =>accept 0-9 digit which 2 character
//ii. /product/order/:year/and/:month([a-z]) 
//iii. /:type(post|article)/:id= noly work if type is post or article

// const express =require('express')
// const app=express();
// app.get('/student/:id([0-9]{2})',(req,res)=>{ 
//     console.log(req.params); // object like key and value
//     res.send(`Your id is ${req.params.id}`)
// })
// // only work when url is type=post or article
// app.get('/:type(post|article)/:id',(req,res)=>{ 
//     console.log(req.params); // object like key and value
//     res.send(`Your id is ${req.params.id} and type is ${req.params.type}`)
// })

// app.get('/product/order/:year/and/:month([a-z])',(req,res)=>{ 
//     console.log(req.params); // object like key and value
//     //object destructuring
//     const {category,id}=req.params;
//     res.send(`My category is ${category} and id is ${id}`)
// })
// app.listen(4000,()=>{
//     console.log(`ServerRunning at port 4000`);
// })

//3.Route parameter
//i. app.param()=>this app.param() function is used to add the callback triggers to route parameters
// example
// let express=require("express");
// const app=express();
//      app.param('id',(req,res,next,id)=>{
//          console.log(`My id is ${id}`);
//          next();
//      })
//     app.get('/user/:id',(req,res)=>{
//         console.log("This is userPath");
//         res.send("Response ok");
//     })

// app.listen(4000,()=>{
//     console.log(`ServerRunning at port 4000`);
// })

//4. app.parems with array

// let express=require("express");
// const app=express();
//      app.param(['id','page'],(req,res,next, value)=>{
//          console.log(`My id is ${value}`);   // call only once time if match with id or page
//          next();
//      })
//     app.get('/user/:id/:page',(req,res)=>{
//         console.log("This is userPath");
//         res.send("Response ok");
//     })

// app.listen(4000,()=>{
//     console.log(`ServerRunning at port 4000`);
// })


//5.Query String=> pending
