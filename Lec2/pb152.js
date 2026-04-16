/* Write an ExpressJS to take a textarea & submit button. After clicking 
submit button the content of textarea should be represented on next 
page by writing each sentence (separated by dot) in new line. */

const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\LJENG\\Desktop\\FSD-sem4-T2\\Lec2\\pb152.html")
})
app.get("/data", (req, res) => {
    var message = req.query.msg
    let msg1 = message.split(".")
    for (var i of msg1) {
        res.write(i + '\n')
    }
    res.send()
}).listen(3001)