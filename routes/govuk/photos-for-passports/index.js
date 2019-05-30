var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('govuk/photos-for-passports/index');
});
app.get('/photo-requirements', function (req, res, next) {
    res.render('govuk/photos-for-passports/photo-requirements');
});

module.exports = app;
