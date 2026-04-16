const express = require('express')
var app = express()

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\LJENG\\Desktop\\FSD-sem4-T2\\Lec2\\hello.html")
}).listen(5000)