const express = require('express');
const session = require('express-session');
const app = express();



app.use(session({
  secret: 'your_secret_key',          // Use a strong, unique secret
}));

app.use(express.static(__dirname))

app.get('/save_session', (req, res) => {
  req.session.uname = req.query.username
  req.session.psw = req.query.password
  res.redirect("/fetchsession")
});

app.get("/fetchsession", (req, res) => {
  res.send(`Welcome ${req.session.uname} <a href="/deletesession">Logout</a>`)
})

app.get("/deletesession", (req, res) => {
  req.session.destroy()
  res.redirect("/")
}).listen(5001)