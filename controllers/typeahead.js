var util = require('util'),
    _ = require('underscore');

var Controller = require('hmpo-form-wizard').Controller;

var countries = require('../config/countries');

var Typeahead = function () {
    Controller.apply(this, arguments);
};

util.inherits(Typeahead, Controller);

Typeahead.prototype.getValues = function getValues(req, res, callback) {
    Controller.prototype.getValues.call(this, req, res, function (err, values) {
        if (values.typeahead) {
            var country = _.find(countries, function (c) {
                if (c.id == values.typeahead) {
                    return c;
                }
            });
            values = _.extend(values, { country: country.name });
        }
        callback(null, values);
    });
};

module.exports = Typeahead;
