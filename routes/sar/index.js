var app = require('express')();
app.get('/help-signing-passport', function (req, res, callback) {
	res.render('sar/index');
});
module.exports = app;
