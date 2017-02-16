var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('priority_service_170301/photoguide-static/photorules');
});

module.exports = app;
