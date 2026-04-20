const express = require('express')
var app = express()
const path = require('path')
const sp = path.join(__dirname, "../frontend")
// app.use(express.static(sp))  this always uses index.html as homepage
app.use(express.static(sp, { index: 'one.html' }))
app.listen(3001)