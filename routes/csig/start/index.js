var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('./csig/start');
});

module.exports = app;
