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
app.get('/guidance/extra-guidance-for-first-time-applications', function (req, res, next) {
    res.render('guidance/extra-guidance-for-first-time-applications');
});

module.exports = app;
