/* using Express js make student information form only two fileds like 
name and mobile no and send data on console after submitting 
"submit" button */

const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(`
        <html>
        <body>
        <form action="/login" method="get">
        username:<input type="text" name="username">
        mobile no.:<input type="number" name="mo">
        <input type="submit">
        </form>
        </body>
        </html>
        `)
})

app.get("/login", (req, res) => {
    res.send(`Welcome ${req.query.username} and ${req.query.mo}`)
}).listen(3001)