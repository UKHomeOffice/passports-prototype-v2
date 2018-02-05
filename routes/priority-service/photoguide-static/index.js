var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('priority-service/photoguide-static/photorules');
});

module.exports = app;
