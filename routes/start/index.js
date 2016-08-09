var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('start');
});

module.exports = app;
