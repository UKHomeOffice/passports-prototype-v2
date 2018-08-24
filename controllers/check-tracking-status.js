var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function (req, res, next) {

	req.sessionModel.set('pex', req.query.pex);
	req.sessionModel.set('tracking-status', '');
	req.sessionModel.set('csig-type', '');
	if (req.query.status) {
		req.sessionModel.set('tracking-status', req.query.status)
	}

	if (req.query.csigtype) {
		req.sessionModel.set('csig-type', req.query.csigtype)
	}
	console.log(req.query)
    Base.prototype.get.call(this, req, res, next);

};

module.exports = Controller