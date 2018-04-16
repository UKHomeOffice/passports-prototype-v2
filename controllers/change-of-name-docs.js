var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
	if (req.sessionModel.get('parental-responsibility') == false) {
		return res.redirect('./name-change-docs-for-parents')
	} else if (req.sessionModel.get('16-or-older') == false) {
		return res.redirect('./documents-thirdparty-under16')
	}	else {
		return res.redirect('./documents-thirdparty-over16')
	}
}

// parent no PR > to return res.redirect('./name-change-docs-for-parents')


module.exports = Controller
