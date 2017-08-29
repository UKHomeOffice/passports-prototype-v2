var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('damaged_170830/photoguide-static/photorules');
});

module.exports = app;
