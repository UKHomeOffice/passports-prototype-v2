var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('damaged_171018/photoguide-static/photorules');
});

module.exports = app;
