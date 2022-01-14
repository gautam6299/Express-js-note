//note
// different type of Route methos
//1.get()=retrive data
//2.post()= create/insert data
//3.put()=completely update data 
//4.patch()=partially updata data
//5.delete()=delete data
//6.Any HTTP request Method

//1.get example
const express =require('express')
import express from "express";
const app=express();
// Route
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.get('/about',(req,res)=>{
    res.send("About page");
})
//making default Route
  app.all('*',(req,res)=>{
      res.send("Page not found ");
  });
  // String pattern
  app.get('/ab?cd',(req,res)=>{
      res.send("This path will be match acd and abcd");
  });
  // Regular expression path
  app.get(/a/,(req,res)=>{
      res.send("This is a");
  })
app.listen(3000,()=>{
    console.log(`ServerRunning at port 3000`);
})

//2. more than one callback
import express from "express";
const app=express();
   app.get("/example",(req,res,next)=>{
    console.log("First call");
     next();
   },(req,res)=>{
       console.log("second call");
       res.send("More than one call back example")
   })
app.listen(3000,()=>{
    console.log(`ServerRunning at port 3000`);
})

//3.An array of call back
const cb1=(req,res,next)=>{
    console.log("call back1");
     next();
}
const cb2=(req,res,next)=>{
    console.log("call back2");
         next();
}
const cb3=(req,res,next)=>{
    console.log("call back3")
    res.send("An array of callBack")
}

import express from "express";
const app=express();
        app.get('/array',[cb1,cb2,cb3]);
app.listen(3000,()=>{
    console.log(`ServerRunning at port 3000`);
})

//4.chained route callback
import express from "express";
const app=express();
    app.route('/student')
    .get((req,res)=>{
        res.send("All student");
    })
    .post((req,res)=>{
        res.send("Add new student")
    })
    .put((req,res)=>{
        res.send("update new student")
    })
app.listen(3000,()=>{
    console.log(`ServerRunning at port 3000`);
})

// using all method
import express from "express";
const app=express();
    app.route('/student')
    .all((req,res,next)=>{
      console.log("First Run this for all HTTP Method");
      next();
    })
    .get((req,res)=>{
        res.send("All student");
        console.log("GET method");
    })
    .post((req,res)=>{
        res.send("Add new student")
    })
    .put((req,res)=>{
        res.send("update new student")
    })
app.listen(3000,()=>{
    console.log(`ServerRunning at port 3000`);
})
