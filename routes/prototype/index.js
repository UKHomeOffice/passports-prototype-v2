var app = require('express')()

app.get('/', function (req, res, next) {
    res.render('prototype/index');
});
app.get('/index-prototype', function (req, res, next) {
    res.render('prototype/index-prototype');
});

module.exports = app;
