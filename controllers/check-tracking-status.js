var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function (req, res, next) {
		req.sessionModel.set('tracking-status', '');
		if (req.query.status) {
			req.sessionModel.set('tracking-status', req.query.status)
		}
    Base.prototype.get.call(this, req, res, next);
};

module.exports = Controller
