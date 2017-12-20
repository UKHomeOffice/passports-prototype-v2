var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('prototype_oix_171117/photoguide-static/photorules');
});

module.exports = app;
