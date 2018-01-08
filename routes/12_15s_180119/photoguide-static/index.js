var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('12_15s_180119/photoguide-static/photorules');
});

module.exports = app;
