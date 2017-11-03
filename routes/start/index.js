var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('start');
});

app.get('/archive', function (req, res, next) {
    res.render('archive');
});

module.exports = app;
