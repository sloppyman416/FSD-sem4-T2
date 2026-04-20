const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
    console.log('Student entered in campass');
    next();
});

// Second middleware        in app.use() req.params.id could not be fetched
const ve = (req, res, next) => {
    const ID = "123"
    if (ID == req.params.id) {
        req.id = req.params.id
        console.log("verified")
        next()
    }
    else {
        res.send("Access Denied")
    }

};

// Route handler
app.get('/class/:id', ve, (req, res) => {
    res.send(`Welcome ${req.id}`);
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});