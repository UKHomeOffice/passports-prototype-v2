var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

  var dobParent1 = moment(req.sessionModel.get('parent1-age-year') + '-' + req.sessionModel.get('parent1-age-month') + '-' + req.sessionModel.get('parent1-age-day'), 'YYYY-MM-DD');
  var dobParent2 = moment(req.sessionModel.get('parent2-age-year') + '-' + req.sessionModel.get('parent2-age-month') + '-' + req.sessionModel.get('parent2-age-day'), 'YYYY-MM-DD');


  // Check if DOB falls within certain date ranges, then set session variables
	var parent1BornBefore1983 = moment(dobParent1).isBefore('1983-01-01');
  console.log('Parent 1 born <1983:', parent1BornBefore1983);

  req.sessionModel.set('parent1-born-before-1983', false);
  if (parent1BornBefore1983 == false) {
    req.sessionModel.set('parent1-born-before-1983', false);
  }
  else {
    req.sessionModel.set('parent1-born-before-1983', true);
  }

	var parent1BornAfter1983 = moment(dobParent1).isSameOrAfter('1983-01-01');
  console.log('Parent 1 born =>1983:', parent1BornAfter1983);

  req.sessionModel.set('parent1-born-after-1983', false);
  if (parent1BornAfter1983 == false) {
    req.sessionModel.set('parent1-born-after-1983', false);
  }
  else {
    req.sessionModel.set('parent1-born-after-1983', true);
  }


	var parent2BornBefore1983 = moment(dobParent2).isBefore('1983-01-01');
  console.log('Parent 2 born <1983:', parent2BornBefore1983);

  req.sessionModel.set('parent2-born-before-1983', false);
  if (parent2BornBefore1983 == false) {
    req.sessionModel.set('parent2-born-before-1983', false);
  }
  else {
    req.sessionModel.set('parent2-born-before-1983', true);
  }

	var parent2BornAfter1983 = moment(dobParent2).isSameOrAfter('1983-01-01');
  console.log('Parent 2 born =>1983:', parent2BornAfter1983);

  req.sessionModel.set('parent2-born-after-1983', false);
  if (parent2BornAfter1983 == false) {
    req.sessionModel.set('parent2-born-after-1983', false);
  }
  else {
    req.sessionModel.set('parent2-born-after-1983', true);
  }


  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
