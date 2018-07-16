var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {

	if (req.sessionModel.get('passport-before') == false || req.sessionModel.get('old-blue') == true) {
		return res.redirect('./docs-fta')
	}
	if (req.sessionModel.get('passport-before') == true) {
		if (req.sessionModel.get('change-name') == true) {
			return res.redirect('./docs-renew-change-of-name')
		}
		else {
			return res.redirect('./docs-renew')
		}
	}
	else {
		return
	}
}

module.exports = Controller