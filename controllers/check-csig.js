var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
		console.log(req.session)

  	if (req.session['hmpo-wizard-common']['knowntime'] < 2) {
		return res.redirect('./applicant-summary')
		};

    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller
