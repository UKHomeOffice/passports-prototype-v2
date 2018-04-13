var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
  if (req.sessionModel.get('relationship-applicant') == "Mother") {
    req.sessionModel.set('parent1-first-names', req.sessionModel.get('third-party-first-name'));
    req.sessionModel.set('parent1-last-name', req.sessionModel.get('third-party-last-name'));
  }
  if (req.sessionModel.get('relationship-applicant') == "Father") {
    req.sessionModel.set('parent2-first-names', req.sessionModel.get('third-party-first-name'));
    req.sessionModel.set('parent2-last-name', req.sessionModel.get('third-party-last-name'));
  }
  Base.prototype.get.call(this, req, res, callback);
}

module.exports = Controller
