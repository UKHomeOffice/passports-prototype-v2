var util = require('util');
var Base = require('hmpo-form-wizard').Controller;

var overseasCountries = require('../config/or-overseas-countries');
var config = require('../config');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (req.sessionModel.get('application-country')
    	&& overseasCountries.indexOf(req.sessionModel.get('application-country')) === -1
    	&& req.sessionModel.get('application-country') !== "UK"
    	) {
        return res.redirect(config.services.olc);
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
