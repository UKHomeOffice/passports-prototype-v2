var util = require('util'),
    _ = require('underscore'),
    moment = require('moment');

var SessionForm = require('./form'),
    CostModel = require('../models/costs');

var ConfirmForm = function (options) {
    SessionForm.call(this, options);
};

util.inherits(ConfirmForm, SessionForm);

function join(obj, keys, separator) {
    separator = separator || ' ';
    return _.chain(obj).pick(keys).filter(_.identity).value().join(separator);
}

function currency(cost) {
    cost = cost % 1 ? cost.toFixed(2) : cost;
    return '£' + cost;
}

// find the path for the step containing a given field
ConfirmForm.prototype.getEditStep = function (field) {
    var step = _.find(Object.keys(this.options.steps), function (path) {
        var s = this.options.steps[path];
        return s.fields && s.fields.indexOf(field) > -1;
    }, this);
    if (step == '/address') {
        step += '-manual';
    }
    return step && (step + '/edit');
};

ConfirmForm.prototype.getValues = function (req, res, callback) {
    SessionForm.prototype.getValues.call(this, req, res, function (err, values) {
        if (err) {
            callback(err);
        } else {
            this.createBreakdown(req, values, callback);
        }
    }.bind(this));
};

ConfirmForm.prototype.createBreakdown = function (req, values, callback) {
    var model = new CostModel();
    model.set(values);

    // Set the cost in session so we can use it in front-end later
    req.sessionModel.set('application-cost', currency(model.getCost()));

    var response = _.extend({}, values, {
        sections: []
    });

    // Cost
    response.sections.push({
        className: 'cost-details',
        title: 'Cost',
        fields: [{
                step: this.getEditStep('passport-options'),
                title: 'New passport',
                value: function () {
                    var output = [];
                    if (values['passport-options'] == '50') {
                        var cost = currency(model.standardPassport() + model.largePassport())
                        output.push('Jumbo passport with secure delivery included');
                        output.push(cost);
                    } else {
                        output.push('Standard passport with secure delivery included');
                        output.push(currency(model.standardPassport()));
                    }
                    return output.join('<br>');
                }
            },
            // { /* Keep this here for old blues */
            //   step: values.veteran ? null : this.getEditStep('secure-return'),
            //   title: values.veteran ? 'Delivery' : 'Old passport',
            //   value: function () {
            //     if (values['secure-return']) {
            //       var output = 'You need to post your old passport to us. We’ll return it to you by ';
            //       var cost = model.delivery();
            //       if (cost) {
            //         output += ' secure delivery<br>£5.00 ';
            //       }
            //       return output;
            //     } else {
            //       return 'You need to post your old passport to us. We’ll return it to you by standard post<br>£0.00';
            //     }
            //   }
            // },
            { /* FTA docs */
                step: (values.veteran || values['lost-stolen-no-docs']) ? null : this.getEditStep('secure-return'),
                title: function () {
                    if (values.veteran || values['lost-stolen-no-docs']) {
                        return 'Delivery'
                    } else if (values['is-overseas']) {
                        return 'Courier fee'
                    } else if (values['passport-before'] && !values['lost-stolen'] && values['change-name']) {
                        return 'Old passport and extra documents'
                    } else {
                        return 'Documents'
                    }
                },
                value: function () {
                    if (values['secure-return'] && values['is-overseas'] === true) {
                        var output = 'You need to post your documents to us. We’ll return them to you by';
                        var cost = model.delivery();
                        if (cost) {
                            output += ' secure delivery<br>£' + cost;
                        }
                        return output;
                    } else if (values['is-overseas']) {
                        if (values['passport-before']) {
                            return 'Your old passport and extra documents will be in a different envelope to your new passport £19.86'
                        } else {
                            return 'Your documents will be in a different envelope to your new passport £19.86'
                        }
                    } else if (values['lost-stolen-no-docs']) {
                        return 'We’ll send your new passport by secure delivery. The cost is included in the passport fee<br>£0.00';
                    } else {
                        var output = 'You need to post your documents to us. We’ll return them to you by';
                        var cost = model.delivery();

                        if (values['passport-before'] && !values['lost-stolen'] && values['change-name']) {
                            output = 'We’ll return your old passport and extra documents by';
                        }

                        if (cost) {
                            output += ' secure delivery<br>£' + cost;
                        } else {
                            output += ' standard post<br>£' + cost;
                        }
                        return output;
                    }
                }
            },
            {
                className: 'cost',
                title: 'Total',
                value: function () {
                    return currency(model.getCost());
                }
            }
        ]
    });
    callback(null, response);
};

module.exports = ConfirmForm;