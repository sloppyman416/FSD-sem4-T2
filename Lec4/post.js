const express = require('express')
var app = express()
const path = require('path')
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, "../HTML"), { index: 'program.html' }))

app.post('/calc', (req, res) => {
    var no1 = parseInt(req.body.no1)
    var no2 = parseInt(req.body.no2)

    if (no1 > 0 && no2 > 0) {
        if (req.body.formula == 'add') {
            sum = no1 + no2
            res.write('addition = ' + sum)
        }
    }
})

app.get("/", (req, res) => {
    res.send(`Welcome`)
}).listen(3001)
