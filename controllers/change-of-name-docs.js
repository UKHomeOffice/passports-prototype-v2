var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
	if (req.sessionModel.get('16-or-older') == false){
		return res.redirect('./name-change-docs-for-parents')
	}	else {
		return res.redirect('./declaration')
	}
}

module.exports = Controller
