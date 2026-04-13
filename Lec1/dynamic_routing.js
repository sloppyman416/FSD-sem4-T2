const express = require('express')
var app = express()

app.get("/:month", (req, res) => {
    res.send(`This is month of ${req.params.month}`)
}).listen(3000)


app.get("/:day/:month", (req, res) => {
    res.send(`Today is ${req.params.day} and month is ${req.params.month}`)
}).listen(3001)

app.get("/day/:day/month/:month", (req, res) => {
    res.send(`updated :Today is ${req.params.day} and month is ${req.params.month}`)
}).listen(3002)