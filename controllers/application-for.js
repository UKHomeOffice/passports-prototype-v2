var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

  if (req.sessionModel.get('application-for') == 'application-someone-else' || req.sessionModel.get('application-for') == 'application-child') {
    // set as false to trigger pronoun switching. 
    req.sessionModel.set('application-for', false)
  }

  Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
