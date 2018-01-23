var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {

    if (req.sessionModel.get('parent1-first-names') == '') {
      return res.redirect('../renew/parent-2-details')
    } else {
      return res.redirect('../renew/parent-1-details')
    }
    // if (req.sessionModel.get('parent2-first-names') == '') return res.redirect('../renew');

    //res.redirect('error');
};

module.exports = Controller;
