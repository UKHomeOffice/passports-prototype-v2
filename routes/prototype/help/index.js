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
app.get('/group-applications', function (req, res, next) {
    res.render('prototype/help/group-applications');
});
app.get('/how-to-get-a-digital-photo', function (req, res, next) {
    res.render('prototype/help/how-to-get-a-digital-photo');
});
app.get('/how-to-take-a-digital-photo', function (req, res, next) {
    res.render('prototype/help/how-to-take-a-digital-photo');
});
app.get('/identity-interviews', function (req, res, next) {
    res.render('prototype/help/identity-interviews');
});
app.get('/parents-details', function (req, res, next) {
    res.render('prototype/help/parents-details');
});
app.get('/photo-code', function (req, res, next) {
	res.render('prototype/help/photo-code');
});
app.get('/photo-rules', function (req, res, next) {
	res.render('prototype/help/photo-rules');
});
app.get('/photo-rules-photo-checker', function (req, res, next) {
	res.render('prototype/help/photo-rules-photo-checker');
});
app.get('/terms-and-conditions', function (req, res, next) {
    res.render('prototype/help/terms-and-conditions');
});
app.get('/who-can-confirm', function (req, res, next) {
    res.render('prototype/help/who-can-confirm');
});
app.get('/apply-in-welsh', function (req, res, next) {
    res.render('prototype/help/apply-in-welsh');
});

module.exports = app;
