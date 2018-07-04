var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

  var dob = moment(req.sessionModel.get('age-year') + '-' + req.sessionModel.get('age-month') + '-' + req.sessionModel.get('age-day'), 'YYYY-MM-DD');


  // Check if DOB falls within certain date ranges, then set session variables
	var bornBefore1983 = moment(dob).isBetween('0001-01-01', '1983-01-01', null, '[)');
  console.log('Born <1983:', bornBefore1983);

  req.sessionModel.set('born-before-1983', false);
  if (bornBefore1983 == false) {
    req.sessionModel.set('born-before-1983', false);
  }
  else {
    req.sessionModel.set('born-before-1983', true);
  }


  // Check age, then set session variables
	var age = moment().diff(dob, 'years');
	console.log('age:', age);

	req.sessionModel.set('feckless-teenager', false);
	req.sessionModel.set('16-or-older', false);

  if (age >= 16 && age < 18) {
    req.sessionModel.set('feckless-teenager', true);
  }
	if (age >= 16) {
    req.sessionModel.set('16-or-older', true);
  }


  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
