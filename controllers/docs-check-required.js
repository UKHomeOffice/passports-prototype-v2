var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {

	return res.redirect('./docs-fta')
	// return res.redirect('./docs-renew')

	// if (req.sessionModel.get('change-name') == false) {
	// 	return res.redirect('./declaration')
	// } else {
	// 	switch (req.sessionModel.get('change-of-name-reason')) {
	// 		case 'Marriage-or-civil-partnership':
	// 			return res.redirect('./docs-name-change-for-marriage-or-civil-partnership')
	// 		case 'Divorce-or-dissolution':
	// 			return res.redirect('./docs-name-change-for-divorce-or-dissolution')
	// 		case 'Gender-transition':
	// 			return res.redirect('./docs-name-change-for-gender-change')
	// 		case 'I-changed-my-name-another-way':
	// 			return res.redirect('./docs-name-change-for-other-changes')
	// 	}
	// }
}

module.exports = Controller