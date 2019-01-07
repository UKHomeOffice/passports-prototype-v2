var app = require('express')();

app.get('/additional-documents', function (req, res, next) {
    res.render('prototype/help/additional-documents');
});
app.get('/british-nationality', function (req, res, next) {
    res.render('prototype/help/british-nationality');
});
app.get('/children-acts', function (req, res, next) {
    res.render('prototype/help/children-acts');
});
app.get('/confirming-your-identity', function (req, res, next) {
    res.render('prototype/help/confirming-your-identity');
});
app.get('/identity-interviews', function (req, res, next) {
    res.render('prototype/help/identity-interviews');
});
app.get('/parents-details', function (req, res, next) {
    res.render('prototype/help/parents-details');
});
app.get('/photo-rules', function (req, res, next) {
	res.render('prototype/help/photo-rules');
});
app.get('/prove-responsibility-for-a-child', function (req, res, next) {
    res.render('prototype/help/prove-responsibility-for-a-child');
});
app.get('/recognised-professions', function (req, res, next) {
    res.render('prototype/help/recognised-professions');
});
app.get('/terms-and-conditions', function (req, res, next) {
    res.render('prototype/help/terms-and-conditions');
});
app.get('/who-can-confirm', function (req, res, next) {
    res.render('prototype/help/who-can-confirm');
});

module.exports = app;
