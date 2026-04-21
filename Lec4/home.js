const express = require('express')
var app = express()
const path = require('path')
var sp=path.join(__dirname,"/frontend")
app.use(express.static(sp, { index: 'home.html' }))
app.get("/check",(req,res)=>{
    res.send("This is check page")
}).listen(3001)