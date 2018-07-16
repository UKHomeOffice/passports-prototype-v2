var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    req.sessionModel.set('csig-child', false);
    var referenceNumber = req.sessionModel.get('pex-number');
    if (referenceNumber.startsWith('2')) return res.redirect('./csig-expired');
    if (referenceNumber.startsWith('3')) return res.redirect('./csig-invalid');
    if (referenceNumber.startsWith('4')) {
      req.sessionModel.set('csig-child', true);
    }
    res.redirect('./declaration');

    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
