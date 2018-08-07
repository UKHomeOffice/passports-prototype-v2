var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
		console.log(req.session);
		if (req.session['hmpo-wizard-common']) {
    	req.sessionModel.set('application-for-person', req.session['hmpo-wizard-common']['application-for-someone-else']);
		}
		console.log('***Session:' + req.sessionModel.get('application-for-person'));
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller
