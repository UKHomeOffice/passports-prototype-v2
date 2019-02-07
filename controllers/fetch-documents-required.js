var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {

	if (req.sessionModel.get('lost-stolen') == true && req.sessionModel.get('applicant-age') < 16 && (req.sessionModel.get('relationship-applicant') === 'Mother' || req.sessionModel.get('relationship-applicant') === 'Father')) {
		req.sessionModel.set('lost-stolen-no-docs', ''); // reset variable for use on docs page, so radio option is not pre-filled
		return res.redirect('./docs-lost-stolen-parents')
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