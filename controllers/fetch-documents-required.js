var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
	if (req.sessionModel.get('lost-stolen') == true && req.sessionModel.get('change-name') == false && req.sessionModel.get('application-for-someone-else') == false ) {
		return res.redirect('./docs-lost-stolen')
	}
	if (req.sessionModel.get('passport-before') == false || req.sessionModel.get('old-blue') == true) {
		if (req.sessionModel.get('applicant-age') >= 16) {
			return res.redirect('./docs-fta')
		} else {
			return res.redirect('./docs-ftc')
		}
	} else if (req.sessionModel.get('passport-before') == true) {
		return res.redirect('./docs-renew')
	} else {
		return
	}
}

module.exports = Controller