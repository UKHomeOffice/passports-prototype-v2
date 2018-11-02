var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function (req, res, next) {

	if (req.session['hmpo-wizard-common']['tracking-status'] == 'send-passport') {
		req.sessionModel.set('send-passport', true)
	}
	
	Base.prototype.get.call(this, req, res, next);

};

module.exports = Controller