var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

  var dob = moment(req.sessionModel.get('age-year') + '-' + req.sessionModel.get('age-month') + '-' + req.sessionModel.get('age-day'), 'YYYY-MM-DD');
	var age = moment().diff(dob, 'years');
	console.log('age:', age);

	req.sessionModel.set('feckless-teenager', false);
	req.sessionModel.set('16-or-older', false);

  if (age > 16 && age < 19) {
    req.sessionModel.set('feckless-teenager', true);
  }

	if (age > 16) {
    req.sessionModel.set('16-or-older', true);
  }

  Base.prototype.successHandler.call(this, req, res, callback);

}

module.exports = Controller;
