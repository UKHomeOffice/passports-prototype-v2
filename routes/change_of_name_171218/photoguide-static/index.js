var app = require('express')();

app.get('/photorules', function (req, res, next) {
	res.render('change_of_name_171218/photoguide-static/photorules');
});

module.exports = app;
