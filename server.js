//Create a route Sent a request Number of times
const express = require("express");
const app = express();
const session = require('express-session');

app.use(session({secret:"mysecretecode",resave:false,saveUninitialized:true}));

app.get("/test",(req,res)=>{
    res.send("test successful");
})

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
         req.session.count = 1;
    }

    res.send(`you sent a request${ req.session.count++} number of times`);
})



app.listen(3000,()=>{
    console.log("App is listening on port");
});