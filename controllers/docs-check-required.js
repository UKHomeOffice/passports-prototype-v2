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
			switch (req.sessionModel.get('change-of-name-reason')) {
				case 'Marriage-or-civil-partnership':
					return res.redirect('./docs-name-change-for-marriage-or-civil-partnership')

				case 'Divorce-or-dissolution':
					return res.redirect('./docs-name-change-for-divorce-or-dissolution')

				case 'Gender-transition':
					return res.redirect('./docs-name-change-for-gender-change')

				case 'I-changed-my-name-another-way':
					return res.redirect('./docs-name-change-for-other-changes')
			}
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