var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
  if (req.sessionModel.get('application-for') == true) {
    req.sessionModel.set('application-for-relationship', true)
  }
  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
