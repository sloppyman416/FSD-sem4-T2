const express = require('express')
var app = express()

var cp = require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname))

app.get("/next", (req, res) => {
    res.cookie("fname", req.query.uname)
    res.cookie("lname", req.query.lname)
    res.cookie("password", req.query.password)
    res.redirect("/about")

})

app.get("/about", (req, res) => {
    res.write("username= " + req.cookies.fname + '\n')
    // res.clearCookie("lname")
    res.write("password= " + req.cookies.password)
    res.send()
}).listen(3001)


