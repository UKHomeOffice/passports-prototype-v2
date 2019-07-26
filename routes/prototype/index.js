var app = require('express')()

app.get('/', function (req, res, next) {
    res.render('prototype/index');
});
app.get('/index-prototype', function (req, res, next) {
    res.render('prototype/index-prototype');
});
app.get('/index-prototype-photo-checker', function (req, res, next) {
    res.render('prototype/index-prototype-photo-checker');
});

module.exports = app;
