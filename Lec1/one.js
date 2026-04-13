const express = require('express')
var app = express()

app.get("/", (req, res) => {
    res.write("Hello world")
    res.send()
})


app.get("/about", (req, res) => {
    res.type('text/html')
    res.send('<h1>This is about page</h1>')
})

app.get("/contact", (req, res) => {
    res.send("This is contact page")
})

app.listen(3000)