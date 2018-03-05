var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    var url = req.sessionModel.get('pex-number');
    if (url.startsWith('2')) return res.redirect('./csig-expired');
    if (url.startsWith('3')) return res.redirect('./csig-invalid');
    res.redirect('../referee/');
};

module.exports = Controller;
