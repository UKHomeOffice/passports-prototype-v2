var app = require('express').Router();

// Brexit ready
app.get('/brexit-ready', function (req, res, next) {
    res.render('govuk/brexit-ready');
});

module.exports = app;
