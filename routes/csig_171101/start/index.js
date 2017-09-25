var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('./csig_171101/start');
});

module.exports = app;
