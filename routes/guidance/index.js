var app = require('express').Router();

// Brexit ready
app.get('/guidance/brexit-ready', function (req, res, next) {
    res.render('guidance/brexit-ready');
});

module.exports = app;
