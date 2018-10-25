var app = require('express')();

app.get('/photo-rules', function (req, res, next) {
	res.render('prototype/help/photo-rules');
});

module.exports = app;
