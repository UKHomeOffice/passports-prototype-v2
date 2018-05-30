var app = require('express').Router();

app.get('/guidance', function (req, res, next) {
    res.render('guidance');
});
app.get('/guidance/identity-interviews', function (req, res, next) {
    res.render('guidance/identity-interviews');
});
app.get('/guidance/confirming-your-identity', function (req, res, next) {
    res.render('guidance/confirming-your-identity');
});
app.get('/guidance/recognised-professions', function (req, res, next) {
    res.render('guidance/recognised-professions');
});

module.exports = app;
