const express = require('express');
const app = express();

app.get("", (req, res, next) => {
    res.send('Hello');
})

app.get("/books", (req, res, next) => {
    res.send({
        "book 1": "Harry Potter",
        "book 2": "Two States",
        "book 3": "Think and Grow Rich",
        "book 4": "Rich Dad Poor Dad"
    });
})

module.exports = app;