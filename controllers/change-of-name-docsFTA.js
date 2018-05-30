var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
	return res.redirect('./declaration')
}

module.exports = Controller
