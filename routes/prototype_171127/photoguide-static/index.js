var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('prototype_171127/photoguide-static/photorules');
});

module.exports = app;
