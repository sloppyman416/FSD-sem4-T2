const express = require('express')
var app = express()

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\LJENG\\Desktop\\FSD-T2\\Lec1\\hello.html")
})

app.listen(3000)