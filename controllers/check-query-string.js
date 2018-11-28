var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function (req, res, next) {

	//Set the loggedIn flag false
	req.sessionModel.set('loggedIn', false);

	req.sessionModel.set('pex', req.query.pex);
	req.sessionModel.set('tracking-status', '');
	req.sessionModel.set('csig-type', '');
	req.sessionModel.set('status', '');
	req.sessionModel.set('group', '');
	
	if (req.query.status) {
		req.sessionModel.set('tracking-status', req.query.status)
		req.sessionModel.set('status', req.query.status)
	}
	if (req.query.csigtype) {
		req.sessionModel.set('csig-type', req.query.csigtype)
	}
	if (req.query.group) {
		req.sessionModel.set('group', req.query.group)
	}
	console.log(req.query)
	Base.prototype.get.call(this, req, res, next);

};

module.exports = Controller