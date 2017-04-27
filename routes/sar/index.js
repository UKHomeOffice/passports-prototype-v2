var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('sar');
});

module.exports = app;
