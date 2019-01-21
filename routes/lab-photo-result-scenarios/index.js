var app = require('express').Router();

app.get('/lab-photo-result-scenarios/participant-1', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-1');
});
app.get('/lab-photo-result-scenarios/participant-2', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-2');
});
app.get('/lab-photo-result-scenarios/participant-3', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-3');
});
app.get('/lab-photo-result-scenarios/participant-4', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-4');
});
app.get('/lab-photo-result-scenarios/participant-5', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-5');
});
app.get('/lab-photo-result-scenarios/participant-6', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-6');
});
app.get('/lab-photo-result-scenarios/participant-7', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-7');
});
app.get('/lab-photo-result-scenarios/participant-8', function (req, res, next) {
    res.render('lab-photo-result-scenarios/participant-8');
});

module.exports = app;