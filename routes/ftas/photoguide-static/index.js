var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('ftas/photoguide-static/photorules');
});

module.exports = app;
