var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('12_15s/photoguide-static/photorules');
});

module.exports = app;
