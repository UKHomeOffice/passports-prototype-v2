var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

  var dob = moment(req.sessionModel.get('age-year') + '-' + req.sessionModel.get('age-month') + '-' + req.sessionModel.get('age-day'), 'YYYY-MM-DD');

  // Check if DOB falls within certain date ranges, then set session variables
  var bornBefore1983 = moment(dob).isBetween('0001-01-01', '1983-01-01', null, '[)');
  console.log('Born <1983:', bornBefore1983);

  if (bornBefore1983 == false) {
    req.sessionModel.set('born-before-1983', false);
  } else {
    req.sessionModel.set('born-before-1983', true);
  }

  var bornBetween1983and2006 = moment(dob).isBetween('1983-01-01', '2006-07-01', null, '[)');
  console.log('Born 1983–2006:', bornBetween1983and2006);

  if (bornBetween1983and2006 == false) {
    req.sessionModel.set('born-between-1983-and-2006', false);
  } else {
    req.sessionModel.set('born-between-1983-and-2006', true);
  }

  var bornAfter2006 = moment(dob).isSameOrAfter('2006-07-01');
  console.log('Born >= 2006:', bornAfter2006);

  if (bornAfter2006 == false) {
    req.sessionModel.set('born-after-2006', false);
  } else {
    req.sessionModel.set('born-after-2006', true);
  }

  // Date after EUSS launched
  var bornAfter2018 = moment(dob).isSameOrAfter('2018-08-28');
  console.log('Born >= 2018:', bornAfter2018);

  if (bornAfter2018 == false) {
    req.sessionModel.set('born-after-2018', false);
  } else {
    req.sessionModel.set('born-after-2018', true);
  }

  // Check age, then set session variables
  var age = moment().diff(dob, 'years');
  var days = moment().diff(dob.add(age, 'years'), 'days', false);
  console.log('Age: ' + age + ' years, ' + days + ' days');

  req.sessionModel.set('16-to-18', false);
  req.sessionModel.set('16-or-older', false);
  req.sessionModel.set('rising-16', false);
  req.sessionModel.set('12-or-older', false);
  req.sessionModel.set('applicant-age', age)

  if (age >= 16 && age < 18) {
    req.sessionModel.set('16-to-18', true);
  }

  if (age >= 16) {
    req.sessionModel.set('16-or-older', true);
  }

  if (age >= 12) {
    req.sessionModel.set('12-or-older', true);
  }

  if (age == 15 && days >= 344) {
    req.sessionModel.set('rising-16', true);
  }

  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;