const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(`
        <html>
        <body>
        <form action="/login" method="get">
        username:<input type="text" name="username">
        <input type="submit">
        </form>
        </body>
        </html>
        `)
})

app.get("/login", (req, res) => {
    res.send(`Welcome ${req.query.username}`)
}).listen(3001)