var util = require('util'),
    moment = require('moment'),
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
    req.sessionModel.set('required-documents', false);
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
    // format dob for below 16 page
    var formatDob = moment(req.form.values['age-year'] + '-' + req.form.values['age-month'] + '-' + req.form.values['age-day'], 'YYYY-MM-DD').format('D MMMM YYYY');
    req.sessionModel.set('date-of-birth', formatDob);

    // if (req.form.values['age-year'] > '2001') {
    //     return res.redirect('./below-16');
    // }

    if (req.url =='/parent-2-details') {
      if (req.form.values['parent2-first-names'] != '') {
          return res.redirect('./parents-married');
      }
    }

    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
