var util = require('util');
var Base = require('hmpo-form-wizard').Controller;

var countries = require('../config/countries');
var overseasCountries = require('../config/or-overseas-countries');
var overseasNotEligibleCountries = require('../config/overseas-not-eligible-countries');
var overseasFirstHiddenAsRenew = require('../config/overseas-renew-first');
var overseasNotAvailable = require('../config/overseas-not-available');


var config = require('../config');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (req.sessionModel.get('application-country')
    	&& overseasCountries.indexOf(req.sessionModel.get('application-country')) === -1
      && overseasNotEligibleCountries.indexOf(req.sessionModel.get('application-country')) === -1
      && overseasFirstHiddenAsRenew.indexOf(req.sessionModel.get('application-country')) === -1
      && overseasNotAvailable.indexOf(req.sessionModel.get('application-country')) === -1
    	&& req.sessionModel.get('application-country') !== "UK"
    	) {
        return res.redirect(config.services.olc);
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
