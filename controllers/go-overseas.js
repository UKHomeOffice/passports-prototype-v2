var util = require('util'),
    _ = require('underscore');

var Base = require('./form'),
    countries = require('../config/countries'),
    orCountries = require('../config/or-overseas-countries'),
    notEligibleCountries = require('../config/overseas-not-eligible-countries'),
    firstHiddenAsRenew = require('../config/overseas-renew-first');
    notAvailableCountries = require('../config/overseas-not-available');


var Controller = function Controller(options) {

    Base.call(this, options);
};

util.inherits(Controller, Base);

Controller.prototype.saveValues = function (req, res, callback) {
    if (req.form.values['application-country']) {
        var country = _.findWhere(countries, { id: req.form.values['application-country']});
        req.form.values['application-country-label'] = country ? country.name : '';

        var countrycode = _.findWhere(countries, { id: req.form.values['application-country']});
        req.form.values['application-country-code'] = country ? country.countrycode : '';

    }
    Base.prototype.saveValues.call(this, req, res, callback);
};

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
    if (req.sessionModel.get('application-country') && notAvailableCountries.indexOf(req.sessionModel.get('application-country')) > -1) {
        return res.redirect(this.options.nextAltAltAltAlt);
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
