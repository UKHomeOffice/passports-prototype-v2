var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('./csig_170830/start');
});

module.exports = app;
