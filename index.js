const { log } = require('console');
const express = require('express');

const app = express();


app.get('/', function (req, res) {
    res.end("Homepage");
})

app.get('/contact-us', function (req, res) {
    res.end("You can contact me with at my email address");
})

app.post('/tweet', function (req, res) {
    res.status(201).end("Tweet created ");
})

app.listen(8000, () => console.log(`Server is running on PORT:8000`))