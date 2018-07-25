var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {
    if (req.sessionModel.get('passport-before') == true && req.sessionModel.get('old-blue') == false) {
      return res.redirect('../intro');
    } else {
      return res.redirect('./summary');
    }

    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
