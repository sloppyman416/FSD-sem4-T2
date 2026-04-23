const express = require('express')
var app = express()

var cp = require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname))

app.get("/submit-feedback", (req, res) => {
    res.cookie("feedback", { "fname": req.query.uname, "email": req.query.e, "message": req.query.msg, "rating": req.query.r }, { maxAge: 10000 })

    res.send("data submitted <a href='/view-feedback'>Link</a>")
})

app.get("/view-feedback", (req, res) => {
    data = req.cookies
    if (data) {
        res.send(data)
    }
    else { res.send("No data") }
}).listen(3001)


