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

    // Third-party
    var thirdPartyFields = [];

    response.sections.push({
        className: 'third-party-details',
        title: 'Your relationship to the applicant',
        fields: thirdPartyFields
    });

    if (values['relationship-applicant'] == 'Other') {
        thirdPartyFields.push({
            step: this.getEditStep('relationship-applicant'),
            title: 'Relationship',
            value: values['relationship-other']
        });
    } else {
        thirdPartyFields.push({
            step: this.getEditStep('relationship-applicant'),
            title: 'Relationship',
            value: values['relationship-applicant']
        })
    };

    thirdPartyFields.push({
        step: this.getEditStep('third-party-first-name'),
        title: 'Name',
        value: join(values, ['third-party-first-name', 'third-party-last-name'])
    });

    // When reason why they can't apply appears
    if ((values['16-or-older'] == true || values['rising-16'] == true) ||
        (values['16-or-older'] == false && (values['relationship-applicant'] == 'Social Worker' || values['relationship-applicant'] == 'Other'))
    ) {
        thirdPartyFields.push({
            step: this.getEditStep('why-cant-apply'),
            title: 'Explanation',
            value: values['why-cant-apply']
        });
    };

    // Logic to remove fields from stack
    // NOT third-party application
    if (values['application-for-someone-else'] == false) {
        console.log('DELETE third-party fields')
        response.sections.pop({
            fields: thirdPartyFields
        });
    }


    // Old passport
    var oldPassportFields = [];

    response.sections.push({
        className: 'old-passport-details',
        title: 'Old passport',
        fields: oldPassportFields
    });
    oldPassportFields.push({
        step: this.getEditStep('passport-number'),
        title: 'Passport number',
        value: values['passport-number']
    }, {
        step: this.getEditStep('expiry-year'),
        title: 'Expiry date',
        value: moment(values['expiry-year'] + '-' + values['expiry-month'] + '-01', 'YYYY-MM-DD').format('MMMM YYYY')
    });
    if (values['what-damaged']) {
        oldPassportFields.push({
            step: this.getEditStep('what-damaged'),
            title: 'What is damaged on your passport?',
            value: values['what-damaged']
        });
    };
    if (values['how-damaged']) {
        oldPassportFields.push({
            step: this.getEditStep('how-damaged'),
            title: 'How is your passport damaged?',
            value: values['how-damaged']
        });
    };

    // Logic to remove fields from stack
    if (values['passport-before'] == false) { // NOT had passport before
        console.log('DELETE old passport fields')
        response.sections.pop({
            fields: oldPassportFields
        });
    }


    // Naturalisation/Registration
    var naturalisationRegistrationFields = [];

    response.sections.push({
        className: 'naturalisation-registration-details',
        title: 'Naturalisation or registration details',
        fields: naturalisationRegistrationFields
    });
    naturalisationRegistrationFields.push({
        step: this.getEditStep('naturalisation-registration-certificate-number'),
        title: 'Certificate number',
        value: values['naturalisation-registration-certificate-number']
    }, {
        step: this.getEditStep('naturalisation-registration-certificate-issue-year'),
        title: 'Date of issue',
        value: moment(values['naturalisation-registration-certificate-issue-year'] + '-' + values['naturalisation-registration-certificate-issue-month'] + '-' + values['naturalisation-registration-certificate-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });

    // Logic to remove fields from stack
    if (values['naturalisation-registration-certificate'] == false || // NOT naturalised or registered
        values['old-blue'] == false // Passport issued On or After 01/01/1994 (NOT Old blue) Renewal
    ) {
        console.log('DELETE nat/reg fields')
        response.sections.pop({
            fields: naturalisationRegistrationFields
        });
    }


    // New passport
    var newPassportFields = [];

    response.sections.push({
        className: 'new-passport-details',
        title: 'New passport',
        fields: newPassportFields
    });

    newPassportFields.push({
        step: this.getEditStep('name'),
        title: 'Title',
        value: values['title']
        //  value: values['title'] === 'Other' ? values['other-title'] : values['title']
    }, {
        step: this.getEditStep('name'),
        title: 'Name',
        value: join(values, ['name', 'lastname'])
    });

    if (values['change-name'] == true) {
        var str = values['change-of-name-reason'];
        reason = str.replace(/-/g, ' ');
        newPassportFields.push({
            step: this.getEditStep('change-of-name-reason'),
            title: 'Name change',
            value: reason
        });
    }

    var allPreviousNames = _.zip(values['previous-first-name'], values['previous-last-name']);
    var previousNamesList = "";
    for (i = 0; i < allPreviousNames.length; i++) {
        previousNamesList += allPreviousNames[i].join(' ') + "<br>";
    }

    newPassportFields.push({
        step: this.getEditStep('previous-first-name'),
        title: 'Previous names',
        value: values['previous-name'] ? previousNamesList : 'You have never been known by any other names'
    }, {
        step: this.getEditStep('gender'),
        title: 'Gender',
        value: values['gender'] === 'M' ? 'Male' : values['gender'] === 'F' ? 'Female' : ''
    }, {
        step: this.getEditStep('age-year'),
        title: 'Date of birth',
        value: moment(values['age-year'] + '-' + values['age-month'] + '-' + values['age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
        step: this.getEditStep('town-of-birth'),
        title: 'Town of birth',
        value: values['town-of-birth']
    });

    if (values['country-of-birth']) {
        newPassportFields.push({
            step: this.getEditStep('country-of-birth'),
            title: 'Country of birth',
            value: values['country-of-birth']
        });
    }

    if (values['applicant-age'] >= 12) { // 0-11s don't need to sign
        if (values['can-sign']) {
            newPassportFields.push({
                step: this.getEditStep('can-sign'),
                title: 'Signature',
                value: 'You&rsquo;ll sign your passport when you receive it.'
            });
        } else {
            newPassportFields.push({
                step: this.getEditStep('no-sign-reason'),
                title: 'Signature',
                value: values['no-sign-reason'] ? 'You can’t sign your passport:<br>' + values['no-sign-reason'] : 'You can’t sign your passport'
            });
        }
    }


    if (values['applicant-age'] <= 11) {
        newPassportFields.push({
            title: 'Your photo',
            custom: '<div class="photo"><img src="../../public/images/thumbnail-child.jpg" alt="Your uploaded photo" title="Your uploaded photo" width="150"></div>'
        });
    } else {
        newPassportFields.push({
            title: 'Your photo',
            custom: '<div class="photo"><img src="../../public/images/thumbnail.jpg" alt="Your uploaded photo" title="Your uploaded photo" width="150"></div>'
        });
    }


    // Parents
    var parentsFields = [];

    response.sections.push({
        className: 'parents-details',
        title: 'Parents\' details',
        fields: parentsFields
    });

    var parentsDateOfMarriage = moment(values['marriage-year'] + '-' + values['marriage-month'] + '-' + values['marriage-day'], 'YYYY-MM-DD');

    parentsFields.push({
        step: this.getEditStep('parent1-first-names'),
        title: 'Mother or parent 1',
        value: join(values, ['parent1-first-names', 'parent1-last-name'])
    }, {
        step: this.getEditStep('parent2-first-names'),
        title: 'Father or parent 2',
        value: join(values, ['parent2-first-names', 'parent2-last-name'])
    }, {
        step: this.getEditStep('marriage-year'),
        title: 'Marriage date',
        value: parentsDateOfMarriage.isValid() ? parentsDateOfMarriage.format('D MMMM YYYY') : ''
    });


    // Mother
    var parent1Fields = [];

    response.sections.push({
        className: 'parent1-details',
        title: 'Mother or parent 1',
        fields: parent1Fields
    });

    var parent1DateOfBirth = moment(values['parent1-age-year'] + '-' + values['parent1-age-month'] + '-' + values['parent1-age-day'], 'YYYY-MM-DD');
    var parent1DateOfIssue = moment(values['parent1-passport-issue-year'] + '-' + values['parent1-passport-issue-month'] + '-' + values['parent1-passport-issue-day'], 'YYYY-MM-DD');

    parent1Fields.push({
        step: this.getEditStep('parent1-town-of-birth'),
        title: 'Town of birth',
        value: values['parent1-town-of-birth']
    }, {
        step: this.getEditStep('parent1-country-of-birth'),
        title: 'Country of birth',
        value: values['parent1-country-of-birth']
    }, {
        step: this.getEditStep('parent1-age-year'),
        title: 'Date of birth',
        value: parent1DateOfBirth.isValid() ? parent1DateOfBirth.format('D MMMM YYYY') : ''
    }, {
        step: this.getEditStep('parent1-country-of-nationality'),
        title: 'Nationality',
        value: values['parent1-country-of-nationality']
    }, {
        step: this.getEditStep('parent1-passport-number'),
        title: 'UK passport number',
        value: values['parent1-passport-number']
    }, {
        step: this.getEditStep('parent1-passport-issue-year'),
        title: 'Date of issue',
        value: parent1DateOfIssue.isValid() ? parent1DateOfIssue.format('D MMMM YYYY') : ''
    });

    if (values['parent1-additional-information']) { // If mother additional information is NOT empty
        parent1Fields.push({
            step: this.getEditStep('parent1-additional-information'),
            title: 'Additional information',
            value: values['parent1-additional-information']
        });
    }


    // Father
    var parent2Fields = [];

    response.sections.push({
        className: 'parent2-details',
        title: 'Father or parent 2',
        fields: parent2Fields
    });

    var parent2DateOfBirth = moment(values['parent2-age-year'] + '-' + values['parent2-age-month'] + '-' + values['parent2-age-day'], 'YYYY-MM-DD');
    var parent2DateOfIssue = moment(values['parent2-passport-issue-year'] + '-' + values['parent2-passport-issue-month'] + '-' + values['parent2-passport-issue-day'], 'YYYY-MM-DD');

    parent2Fields.push({
        step: this.getEditStep('parent2-town-of-birth'),
        title: 'Town of birth',
        value: values['parent2-town-of-birth']
    }, {
        step: this.getEditStep('parent2-country-of-birth'),
        title: 'Country of birth',
        value: values['parent2-country-of-birth']
    }, {
        step: this.getEditStep('parent2-age-year'),
        title: 'Date of birth',
        value: parent2DateOfBirth.isValid() ? parent2DateOfBirth.format('D MMMM YYYY') : ''
    }, {
        step: this.getEditStep('parent2-country-of-nationality'),
        title: 'Nationality',
        value: values['parent2-country-of-nationality']
    }, {
        step: this.getEditStep('parent2-passport-number'),
        title: 'UK passport number',
        value: values['parent2-passport-number']
    }, {
        step: this.getEditStep('parent2-passport-issue-year'),
        title: 'Date of issue',
        value: parent2DateOfIssue.isValid() ? parent2DateOfIssue.format('D MMMM YYYY') : ''
    });

    if (values['parent2-additional-information']) { // If father additional information is NOT empty
        parent2Fields.push({
            step: this.getEditStep('parent2-additional-information'),
            title: 'Additional information',
            value: values['parent2-additional-information']
        });
    }


    // Maternal grandparents
    var parent1ParentsFields = [];

    response.sections.push({
        className: 'parent1-parents-details',
        title: 'Maternal grandparents',
        fields: parent1ParentsFields
    });

    var parent1ParentsDateOfMarriage = moment(values['parent1-parents-marriage-year'] + '-' + values['parent1-parents-marriage-month'] + '-' + values['parent1-parents-marriage-day'], 'YYYY-MM-DD');

    parent1ParentsFields.push({
        step: this.getEditStep('parent1-parent1-first-names'),
        title: 'Grandmother',
        value: join(values, ['parent1-parent1-first-names', 'parent1-parent1-last-name'])
    }, {
        step: this.getEditStep('parent1-parent2-first-names'),
        title: 'Grandfather',
        value: join(values, ['parent1-parent2-first-names', 'parent1-parent2-last-name'])
    }, {
        step: this.getEditStep('parent1-parents-marriage-year'),
        title: 'Marriage date',
        value: parent1ParentsDateOfMarriage.isValid() ? parent1ParentsDateOfMarriage.format('D MMMM YYYY') : ''
    });


    // Maternal grandmother
    var parent1Parent1Fields = [];

    response.sections.push({
        className: 'parent1-parent1-details',
        title: 'Maternal grandmother',
        fields: parent1Parent1Fields
    });

    var parent1Parent1DateOfBirth = moment(values['parent1-parent1-age-year'] + '-' + values['parent1-parent1-age-month'] + '-' + values['parent1-parent1-age-day'], 'YYYY-MM-DD');

    parent1Parent1Fields.push({
        step: this.getEditStep('parent1-parent1-town-of-birth'),
        title: 'Town of birth',
        value: values['parent1-parent1-town-of-birth']
    }, {
        step: this.getEditStep('parent1-parent1-country-of-birth'),
        title: 'Country of birth',
        value: values['parent1-parent1-country-of-birth']
    }, {
        step: this.getEditStep('parent1-parent1-age-year'),
        title: 'Date of birth',
        value: parent1Parent1DateOfBirth.isValid() ? parent1Parent1DateOfBirth.format('D MMMM YYYY') : ''
    });

    if (values['parent1-parent1-additional-information']) { // If maternal grandmother additional information is NOT empty
        parent1Parent1Fields.push({
            step: this.getEditStep('parent1-parent1-additional-information'),
            title: 'Additional information',
            value: values['parent1-parent1-additional-information']
        });
    }


    // Maternal grandfather
    var parent1Parent2Fields = [];

    response.sections.push({
        className: 'parent1-parent2-details',
        title: 'Maternal grandfather',
        fields: parent1Parent2Fields
    });

    var parent1Parent2DateOfBirth = moment(values['parent1-parent2-age-year'] + '-' + values['parent1-parent2-age-month'] + '-' + values['parent1-parent2-age-day'], 'YYYY-MM-DD');

    parent1Parent2Fields.push({
        step: this.getEditStep('parent1-parent2-town-of-birth'),
        title: 'Town of birth',
        value: values['parent1-parent2-town-of-birth']
    }, {
        step: this.getEditStep('parent1-parent2-country-of-birth'),
        title: 'Country of birth',
        value: values['parent1-parent2-country-of-birth']
    }, {
        step: this.getEditStep('parent1-parent2-age-year'),
        title: 'Date of birth',
        value: parent1Parent2DateOfBirth.isValid() ? parent1Parent2DateOfBirth.format('D MMMM YYYY') : ''
    });

    if (values['parent1-parent2-additional-information']) { // If maternal grandfather additional information is NOT empty
        parent1Parent2Fields.push({
            step: this.getEditStep('parent1-parent2-additional-information'),
            title: 'Additional information',
            value: values['parent1-parent2-additional-information']
        });
    }


    // Paternal grandparents
    var parent2ParentsFields = [];

    response.sections.push({
        className: 'parent2-parents-details',
        title: 'Paternal grandparents',
        fields: parent2ParentsFields
    });

    var parent2ParentsDateOfMarriage = moment(values['parent2-parents-marriage-year'] + '-' + values['parent2-parents-marriage-month'] + '-' + values['parent2-parents-marriage-day'], 'YYYY-MM-DD');

    parent2ParentsFields.push({
        step: this.getEditStep('parent2-parent1-first-names'),
        title: 'Grandmother',
        value: join(values, ['parent2-parent1-first-names', 'parent2-parent1-last-name'])
    }, {
        step: this.getEditStep('parent2-parent2-first-names'),
        title: 'Grandfather',
        value: join(values, ['parent2-parent2-first-names', 'parent2-parent2-last-name'])
    }, {
        step: this.getEditStep('parent2-parents-marriage-year'),
        title: 'Marriage date',
        value: parent2ParentsDateOfMarriage.isValid() ? parent2ParentsDateOfMarriage.format('D MMMM YYYY') : ''
    });


    // Paternal grandmother
    var parent2Parent1Fields = [];

    response.sections.push({
        className: 'parent2-parent1-details',
        title: 'Paternal grandmother',
        fields: parent2Parent1Fields
    });

    var parent2Parent1DateOfBirth = moment(values['parent2-parent1-age-year'] + '-' + values['parent2-parent1-age-month'] + '-' + values['parent2-parent1-age-day'], 'YYYY-MM-DD');

    parent2Parent1Fields.push({
        step: this.getEditStep('parent2-parent1-town-of-birth'),
        title: 'Town of birth',
        value: values['parent2-parent1-town-of-birth']
    }, {
        step: this.getEditStep('parent2-parent1-country-of-birth'),
        title: 'Country of birth',
        value: values['parent2-parent1-country-of-birth']
    }, {
        step: this.getEditStep('parent2-parent1-age-year'),
        title: 'Date of birth',
        value: parent2Parent1DateOfBirth.isValid() ? parent2Parent1DateOfBirth.format('D MMMM YYYY') : ''
    });

    if (values['parent2-parent1-additional-information']) { // If paternal grandmother additional information is NOT empty
        parent2Parent1Fields.push({
            step: this.getEditStep('parent2-parent1-additional-information'),
            title: 'Additional information',
            value: values['parent2-parent1-additional-information']
        });
    }


    // Paternal grandfather
    var parent2Parent2Fields = [];

    response.sections.push({
        className: 'parent2-parent2-details',
        title: 'Paternal grandfather',
        fields: parent2Parent2Fields
    });

    var parent2Parent2DateOfBirth = moment(values['parent2-parent2-age-year'] + '-' + values['parent2-parent2-age-month'] + '-' + values['parent2-parent2-age-day'], 'YYYY-MM-DD');

    parent2Parent2Fields.push({
        step: this.getEditStep('parent2-parent2-town-of-birth'),
        title: 'Town of birth',
        value: values['parent2-parent2-town-of-birth']
    }, {
        step: this.getEditStep('parent2-parent2-country-of-birth'),
        title: 'Country of birth',
        value: values['parent2-parent2-country-of-birth']
    }, {
        step: this.getEditStep('parent2-parent2-age-year'),
        title: 'Date of birth',
        value: parent2Parent2DateOfBirth.isValid() ? parent2Parent2DateOfBirth.format('D MMMM YYYY') : ''
    });

    if (values['parent2-parent2-additional-information']) { // If paternal grandfather additional information is NOT empty
        parent2Parent2Fields.push({
            step: this.getEditStep('parent2-parent2-additional-information'),
            title: 'Additional information',
            value: values['parent2-parent2-additional-information']
        });
    }



    // Logic to remove fields from stack
    // Adult Renewal
    if (values['passport-before'] == true &&
        values['old-blue'] == false &&
        values['16-or-older'] == true
    ) {
        console.log('DELETE parents fields')
        response.sections.pop({
            fields: parentsFields
        });
        response.sections.pop({
            fields: parent1Fields
        });
        response.sections.pop({
            fields: parent2Fields
        });
    }

    // Logic to remove fields from stack
    // TODO: Potentially refactor the rest of the file to...
    // - instead of logic to work out if fields should be pushed to the stack
    // - use this logic to remove fields by popping off the stack
    if (values['naturalisation-registration-certificate'] == true || // Naturalised or registered
        values['born-before-1983'] == true || // Born Before 01/01/1983
        values['old-blue'] == true || // Passport issued Before 01/01/1994 (Old blue) Hidden FTA
        values['passport-before'] == true // 12-15s renewals that may have parents details, but not grandparents
    ) {
        console.log('DELETE grandparents fields')
        response.sections.pop({
            fields: parent1ParentsFields
        });
        response.sections.pop({
            fields: parent1Parent1Fields
        });
        response.sections.pop({
            fields: parent1Parent2Fields
        });
        response.sections.pop({
            fields: parent2ParentsFields
        });
        response.sections.pop({
            fields: parent2Parent1Fields
        });
        response.sections.pop({
            fields: parent2Parent2Fields
        });
    }


    // Application
    var applicationFields = [];

    response.sections.push({
        className: 'application-details',
        title: 'Application',
        fields: applicationFields
    });

    // if (values['can-interview']) {
    //     applicationFields.push({
    //         step: this.getEditStep('can-interview'),
    //         title: 'Identity interview',
    //         value: 'You can attend an interview.'
    //     });
    // } else {
    //     applicationFields.push({
    //         step: this.getEditStep('no-interview-reason'),
    //         title: 'Identity interview',
    //         value: values['no-interview-reason'] ? 'You can’t attend an interview:<br>' + values['no-interview-reason'] : 'You can’t attend an interview'
    //     });
    // }

    applicationFields.push({
        step: this.getEditStep('postcode'),
        title: 'Address',
        value: join(values, ['address1', 'address2', 'town', 'postcode'], '<br>')
    }, {
        step: this.getEditStep('email'),
        title: 'Contact details',
        value: join(values, ['email', 'mobile'], '<br><br>')
    }, {
        step: this.getEditStep('braille'),
        title: 'Braille',
        value: function () {
            var output = [];
            output.push(values['braille'] ? 'You require a braille sticker' : 'You don’t require a braille sticker');
            return output.join('<br><br>');
        }
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
                        output.push('Jumbo passport');
                        output.push(cost);
                    } else {
                        output.push('Standard passport');
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
            //         output += ' secure delivery. <br/>£5.00 ';
            //       }
            //       return output;
            //     } else {
            //       return 'You need to post your old passport to us. We’ll return it to you by standard post. <br/>£0.00';
            //     }
            //   }
            // },
            { /* FTA docs */
                step: values.veteran ? null : this.getEditStep('secure-return'),
                title: values.veteran ? 'Delivery' : 'Documents',
                value: function () {
                    if (values['secure-return']) {
                        var output = 'You need to post your documents to us. We’ll return them to you by ';
                        var cost = model.delivery();
                        if (cost) {
                            output += ' secure delivery. <br/>£' + cost;
                        }
                        return output;
                    } else {
                        return 'You need to post your documents to us. We’ll return them to you by standard post. <br/>£0.00';
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