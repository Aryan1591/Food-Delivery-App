const express = require('express')
const mongoDB = require('./db')
const app= express()
const port = 5000

app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept"  
    );
    next();
})
mongoDB();
app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port,()=>{
    console.log("Connected to Port 5000");
})