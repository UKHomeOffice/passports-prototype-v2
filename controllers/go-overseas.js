var util = require('util');

var Base = require('./form'),
    orCountries = require('../config/or-overseas-countries'),
    notEligibleCountries = require('../config/overseas-not-eligible-countries'),
    firstHiddenAsRenew = require('../config/overseas-renew-first');

var Controller = function Controller(options) {

    Base.call(this, options);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (req.sessionModel.get('application-country') && orCountries.indexOf(req.sessionModel.get('application-country')) > -1) {
        return res.redirect(this.options.nextAlt);
    }
    if (req.sessionModel.get('application-country') && notEligibleCountries.indexOf(req.sessionModel.get('application-country')) > -1) {
        return res.redirect(this.options.nextAltAlt);
    }
    if (req.sessionModel.get('application-country') && firstHiddenAsRenew.indexOf(req.sessionModel.get('application-country')) > -1) {
        return res.redirect(this.options.nextAltAltAlt);
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
