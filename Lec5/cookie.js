const express = require('express')
var app = express()

var cp=require("cookie-parser")
app.use(cp())
app.get("/cookie",(req,res)=>{
    res.cookie("fname",req.query)
    res.cookie("lname","JavaScript")
    res.cookie("id",2,{maxAge:9000})
    // res.clearCookie("lname")
    res.send(req.cookies)

}).listen(3000)