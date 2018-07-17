var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
  req.sessionModel.set('application-for-relationship', false);
  if (req.sessionModel.get('application-for') == false) {
    req.sessionModel.set('application-for-relationship', true)
  }
  if (req.sessionModel.get('application-for') == false && req.sessionModel.get('application-capacity') == true) {
    req.sessionModel.set('application-for-relationship', false)
  }
  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
