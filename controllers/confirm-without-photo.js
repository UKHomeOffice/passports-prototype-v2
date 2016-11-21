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
        step +='-manual';
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
    var response = _.extend({}, values, { sections: [] });

    response.sections.push({
        className: 'old-passport-details',
        title: 'Old passport',
        fields: [
            {
                step: this.getEditStep('passport-number'),
                title: 'Passport number',
                value: values['passport-number']
            },
            {
                step: this.getEditStep('expiry-year'),
                title: 'Expiry date',
                value: moment(values['expiry-year'] + '-' + values['expiry-month'] + '-01', 'YYYY-MM-DD').format('MMMM YYYY')
            }
        ]
    });

    var newPassportFields = [];
    newPassportFields.push(
        {
            step: this.getEditStep('title'),
            title: 'Title',
              value: values['title']
          //  value: values['title'] === 'Other' ? values['other-title'] : values['title']
        },
        {
            step: this.getEditStep('name'),
            title: 'Name',
            value: join(values, ['name', 'lastname'])
        },
        {
            step: this.getEditStep('previous-names'),
            title: 'Previous names',
            value: values['previous-name'] ? values['previous-names'] : 'You have never been known by any other names'
        },
        {
            step: this.getEditStep('gender'),
            title: 'Gender',
            value: values['gender'] === 'M' ? 'Male' : values['gender'] === 'F' ? 'Female' : ''
        },
        {
            step: this.getEditStep('age-year'),
            title: 'Date of birth',
            value: moment(values['age-year'] + '-' + values['age-month'] + '-' + values['age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
        },
        {
            step: this.getEditStep('town-of-birth'),
            title: 'Town of birth',
            value: values['town-of-birth']
        }

    );

    if(values['country-of-birth']){
      newPassportFields.push(
        {
          step: this.getEditStep('country-of-birth'),
          title: 'Country of birth',
          value: values['country-of-birth']
      }
      );
    }

    if (values['can-sign']) {
        newPassportFields.push(
            {
                step: this.getEditStep('can-sign'),
                title: 'Signature',
                value: 'You&#39;ll sign your passport when you receive it.'
            }
        );
    } else {
        newPassportFields.push(
            {
                step: this.getEditStep('no-sign-reason'),
                title: 'Signature',
                value: values['no-sign-reason'] ? 'You can’t sign your passport:<br>' + values['no-sign-reason'] : 'You can’t sign your passport'
            }
        );
    }

    newPassportFields.push(
        {
            step: this.getEditStep('passport-details-correct'),
            title: 'Personal details',
            value: 'Your personal details haven’t changed'
        },
        {
            title: 'Your photo',
            custom: '<div class="photo"><img src="../../public/images/thumbnail-no-photo.jpg" alt="Send your printed photo with your old passport" title="Your uploaded photo" width="150" style="float:left; width:20%"><span class="no-photo">You need to send your printed photo with your old passport.</span></div>'
        }
    );

    response.sections.push({
        className: 'new-passport-details',
        title: 'New passport',
        fields: newPassportFields
    });

    response.sections.push({
        className: 'application-details',
        title: 'Application',
        fields: [
            {
                step: this.getEditStep('postcode'),
                title: 'Address',
                value: join(values, ['address1', 'address2', 'town', 'postcode'], '<br>')
            },
            {
                step: this.getEditStep('email'),
                title: 'Contact details',
                value: join(values, ['email', 'mobile'], '<br><br>')
            },
            {
                step: this.getEditStep('braille'),
                title: 'Braille',
                value: function () {
                    var output = [];
                    output.push(values['braille'] ? 'You require a braille sticker' : 'You don’t require a braille sticker');
                    return output.join('<br><br>');
                }
            }
        ]
    });

    response.sections.push({
        className: 'cost-details',
        title: 'Cost',
        fields: [
            {
                step: this.getEditStep('braille'),
                title: 'New passport',
                value: function () {
                    var output = [];
                    if (values['passport-options'] == '48') {
                        var cost = model.largePassport();
                        cost = currency(cost);
                        if (!values.veteran) {
                            cost += '&nbsp;extra';
                        }

                        output.push('Jumbo passport with special delivery included.');
                        output.push('£85.50');
                    } else {
                        output.push('Standard passport with special delivery included.');
                        output.push('£72.50');
                    }
                    return output.join('<br>');
                }
            },
            {
                step: values.veteran ? null : this.getEditStep('secure-return'),
                title: values.veteran ? 'Delivery' : 'Old passport',
                value: function () {
                    if (values['secure-return']) {
                        var output = 'You need to post your old passport to us. We’ll return it to you by ';
                        var cost = model.delivery();
                        if (cost) {
                            output += ' special delivery. <br/>£3.00 ';
                        }
                        return output;
                    } else {
                        return 'You need to post your old passport to us. We’ll return it to you by standard post. <br/>£0.00';
                    }
                }
            },
            {
                className: 'cost',
                title: 'Total',
                value: function () {
                    return currency(values.cost);
                }
            }
        ]
    });
    callback(null, response);
};

module.exports = ConfirmForm;
