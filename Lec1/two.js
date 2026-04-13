const express = require('express')
var app = express()

app.get("/", (req, res) => {
    a = {
        "name": "harsh",
        "branch": "CE"
    }
    res.send(a) // or use res.json(a) <-- use for json only
})

app.listen(3000, () => { console.log("hii") })