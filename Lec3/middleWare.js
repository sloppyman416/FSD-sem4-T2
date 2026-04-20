const express = require('express')
var app = express()

const addName = (req, res, next) => {
    req.name = 'xyz'
    next()
}
const addCollege = (req, res, next) => {
    req.college = 'LJU'
    next()
}
const addMarks = (req, res, next) => {
    req.total = 50 + 40
    next()
}

app.get('/student', addName, addCollege, addMarks, (req, res) => {
    res.send("student name=" + req.name + " college name=" + req.college + " marks=" + req.total)
}).listen(3001)
