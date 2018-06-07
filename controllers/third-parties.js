var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
  if (req.sessionModel.get('relationship-applicant') == "Social Worker" || req.sessionModel.get('relationship-applicant') == "Other") {
    req.sessionModel.set('third-party', true)
  } else {
    req.sessionModel.set('third-party', false)
  }
  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
