const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send(`
    <form action="/login" method="get">
      <label>UserName:</label>
      <input type="text" name="username" /><br/>
      <label>Password:</label>
      <input type="password" name="password" /><br/>
      <label>Message:</label><br/>
      <textarea name="message"></textarea><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route for /login
app.get('/login', (req, res, next) => {
    const { username, password, message } = req.query; // store submitted data
    message1 = message              //global variable
    res.send(`
    <h2>Submitted Details</h2>
    <p>UserName: ${username}</p>
    <p>Password: ${password}</p>
    <p>Message: ${message}</p>
    <a href="/message">Show Vowel</a>
  `);
    next(); // pass control if needed
});

// Middleware to count vowels
function countVowels(req, res, next) {
    if (message1) {
        const vowels = message1.match(/[aeiouAEIOU]/g);
        req.vowelCount = vowels ? vowels.length : 0;
    } else {
        req.vowelCount = 0;
    }
    next();
}

// Route for /message
app.get('/message', countVowels, (req, res) => {
    res.send(`
    <h2>Message Vowel Count</h2>
    <p>Number of vowels in your message: ${req.vowelCount}</p>
  `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
