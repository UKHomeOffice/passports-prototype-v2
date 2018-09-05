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
app.get('/guidance/british-nationality', function (req, res, next) {
    res.render('guidance/british-nationality');
});
app.get('/guidance/parents-details', function (req, res, next) {
    res.render('guidance/parents-details');
});
app.get('/guidance/additional-documents', function (req, res, next) {
    res.render('guidance/additional-documents');
});

// Temporary page for interstitial grandparents details

app.get('/ftas/renew/interstitial-require-grandparents-details', function (req, res, next) {
    res.render('ftas/renew/interstitial-require-grandparents-details');
});

// Brexit ready 
app.get('/guidance/brexit-ready', function (req, res, next) {
    res.render('guidance/brexit-ready');
});

module.exports = app;
