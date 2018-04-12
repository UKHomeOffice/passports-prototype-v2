var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
	console.log('this', req.sessionModel.get('16-or-older'))
	if (req.sessionModel.get('16-or-older') == false){
		return res.redirect('./name-change-docs-for-parents')
	}
	// if (req.sessionModel.get('relationship-applicant') == 'Other'){
	// 	return res.redirect('./declaration-other')
	// }
	// else {
	// 	return res.redirect('./declaration')
	// }
}

module.exports = Controller
