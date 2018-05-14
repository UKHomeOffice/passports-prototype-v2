var app = require('express').Router();

app.get('/guidance', function (req, res, next) {
    res.render('guidance');
});
app.get('/guidance/documents-1', function (req, res, next) {
    res.render('guidance/documents-1');
});

module.exports = app;
