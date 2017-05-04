var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('prototype_oix_170518/photoguide-static/photorules');
});

module.exports = app;
