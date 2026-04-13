const express = require('express')
var app = express()

const obj = [
    { name: "harsh", age: 20 },
    { name: "satya", age: 21 },
    { name: "saumya", age: 19 }
];



app.get("/homepage", (req, res) => { //json object
    res.send(obj)
})

app.get("/sortedNames", (req, res) => {     // descending order => age
    const c = obj.sort((a, b) => a.age - b.age);
    // Convert to string form
    const resultString = c.map(item => `${item.name}: ${item.age}`).join(", ");

    res.send(resultString);
})

app.listen(3001)