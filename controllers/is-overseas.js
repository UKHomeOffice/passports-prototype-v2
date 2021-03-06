var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function (req, res, next) {

  //Set the is-overseas flag
  if (req.sessionModel.get('application-country') !== '' && req.sessionModel.get('apply-uk') === false) {
    req.sessionModel.set('is-overseas', true);
  } else {
    req.sessionModel.set('application-country', 'GB')
    req.sessionModel.set('is-overseas', false);
  }

  Base.prototype.successHandler.call(this, req, res, next);

};

module.exports = Controller