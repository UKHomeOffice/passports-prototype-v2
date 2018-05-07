var util = require('util'),
  _ = require('underscore'),
  moment = require('moment');

var SessionForm = require('./form'),
  CostModel = require('../models/costs');

var ConfirmForm = function(options) {
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
ConfirmForm.prototype.getEditStep = function(field) {
  var step = _.find(Object.keys(this.options.steps), function(path) {
    var s = this.options.steps[path];
    return s.fields && s.fields.indexOf(field) > -1;
  }, this);
  if (step == '/address') {
    step += '-manual';
  }
  return step && (step + '/edit');
};

ConfirmForm.prototype.getValues = function(req, res, callback) {
  SessionForm.prototype.getValues.call(this, req, res, function(err, values) {
    if (err) {
      callback(err);
    } else {
      this.createBreakdown(req, values, callback);
    }
  }.bind(this));
};

ConfirmForm.prototype.createBreakdown = function(req, values, callback) {
  var model = new CostModel();
  model.set(values);
  var response = _.extend({}, values, {
    sections: []
  });

  var oldPassportFields = [];
  if (values['passport-number']) {
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
  }

  // Naturalisation/Registration details
  var naturalisationRegistrationFields = [];
  if (values['naturalisation-registration-certificate'] == true) { /* If applicant is naturalised or registered */
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
  }

  var newPassportFields = [];
  var allPreviousNames = _.zip(values['previous-first-name'],values['previous-last-name']);
  var previousNamesList = "";
  for (i = 0; i < allPreviousNames.length; i++) {
  	previousNamesList += allPreviousNames[i].join(' ') + "<br>";
	}

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

  newPassportFields.push({
    step: this.getEditStep('previous-first-name'),
    title: 'Previous names',
    value: values['previous-name'] ? previousNamesList : 'You have never been known by any other names'
  });

  newPassportFields.push({
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
    }

  );

  if (values['country-of-birth']) {
    newPassportFields.push({
      step: this.getEditStep('country-of-birth'),
      title: 'Country of birth',
      value: values['country-of-birth']
    });
  }

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

  newPassportFields.push(
    /*  {
          step: this.getEditStep('passport-details-correct'),
          title: 'Personal details',
          value: 'Your personal details haven’t changed'
      },*/
    {
      title: 'Your photo',
      custom: '<div class="photo"><img src="../../public/images/thumbnail.jpg" alt="Your uploaded photo" title="Your uploaded photo" width="150"></div>'
    }, {
      step: this.getEditStep('recognisable'),
      title: 'Your appearance',
      value: 'You can be recognised as the same person'
    }
  );

  response.sections.push({
    className: 'new-passport-details',
    title: 'New passport',
    fields: newPassportFields
  });

  // Parents
  var parentsFields = [];
  // if (values['parent1-first-names']) { /* If parent 1 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parents-details',
      title: 'Parents\' details',
      fields: parentsFields
    });
    parentsFields.push({
      step: this.getEditStep('parent1-first-names'),
      title: 'Mother',
      value: join(values, ['parent1-first-names', 'parent1-last-name'])
    }, {
      step: this.getEditStep('parent2-first-names'),
      title: 'Father',
      value: join(values, ['parent2-first-names', 'parent2-last-name'])
    }, {
      step: this.getEditStep('marriage-year'),
      title: 'Marriage date',
      value: moment(values['marriage-year'] + '-' + values['marriage-month'] + '-' + values['marriage-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });
  }
  // }

  // Parent 1
  var parent1Fields = [];
  // if (values['parent1-first-names']) { /* If parent 1 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent1-details',
      title: 'Mother',
      fields: parent1Fields
    });
    parent1Fields.push({
      step: this.getEditStep('parent1-town'),
      title: 'Town of birth',
      value: values['parent1-town']
    }, {
      step: this.getEditStep('parent1-country-of-birth'),
      title: 'Country of birth',
      value: values['parent1-country-of-birth']
    }, {
      step: this.getEditStep('parent1-age-year'),
      title: 'Date of birth',
      value: moment(values['parent1-age-year'] + '-' + values['parent1-age-month'] + '-' + values['parent1-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
      step: this.getEditStep('parent1-country-of-nationality'),
      title: 'Country of nationality',
      value: values['parent1-country-of-nationality']
    }, {
      step: this.getEditStep('parent1-passport-number'),
      title: 'UK passport number',
      value: values['parent1-passport-number']
    }, {
      step: this.getEditStep('parent1-passport-issue-year'),
      title: 'Date of issue',
      value: moment(values['parent1-passport-issue-year'] + '-' + values['parent1-passport-issue-month'] + '-' + values['parent1-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
      step: this.getEditStep('parent1-additional-information'),
      title: 'Additional information',
      value: values['parent1-additional-information']
    });
  }
  // }

  // Parent 2
  var parent2Fields = [];
  // if (values['parent2-first-names']) { /* If parent 2 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent2-details',
      title: 'Father',
      fields: parent2Fields
    });
    parent2Fields.push({
      step: this.getEditStep('parent2-town'),
      title: 'Town of birth',
      value: values['parent2-town']
    }, {
      step: this.getEditStep('parent2-country-of-birth'),
      title: 'Country of birth',
      value: values['parent2-country-of-birth']
    }, {
      step: this.getEditStep('parent2-age-year'),
      title: 'Date of birth',
      value: moment(values['parent2-age-year'] + '-' + values['parent2-age-month'] + '-' + values['parent2-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
      step: this.getEditStep('parent2-country-of-nationality'),
      title: 'Country of nationality',
      value: values['parent2-country-of-nationality']
    }, {
      step: this.getEditStep('parent2-passport-number'),
      title: 'UK passport number',
      value: values['parent2-passport-number']
    }, {
      step: this.getEditStep('parent2-passport-issue-year'),
      title: 'Date of issue',
      value: moment(values['parent2-passport-issue-year'] + '-' + values['parent2-passport-issue-month'] + '-' + values['parent2-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
      step: this.getEditStep('parent2-additional-information'),
      title: 'Additional information',
      value: values['parent2-additional-information']
    });
  }
  // }

  // Parent 1's parents
  var parent1ParentsFields = [];
  // if (values['parent1-parent1-first-names']) { /* If parent 1's parent 1 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent1-parents-details',
      title: 'Maternal grandparents',
      fields: parent1ParentsFields
    });
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
      value: moment(values['parent1-parents-marriage-year'] + '-' + values['parent1-parents-marriage-month'] + '-' + values['parent1-parents-marriage-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });
  }
  // }

  // Parent 1's parent 1
  var parent1Parent1Fields = [];
  // if (values['parent1-parent1-first-names']) { /* If parent 1's parent 1 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent1-parent1-details',
      title: 'Maternal grandmother',
      fields: parent1Parent1Fields
    });
    parent1Parent1Fields.push({
      step: this.getEditStep('parent1-parent1-town'),
      title: 'Town of birth',
      value: values['parent1-parent1-town']
    }, {
      step: this.getEditStep('parent1-parent1-country-of-birth'),
      title: 'Country of birth',
      value: values['parent1-parent1-country-of-birth']
    }, {
      step: this.getEditStep('parent1-parent1-age-year'),
      title: 'Date of birth',
      value: moment(values['parent1-parent1-age-year'] + '-' + values['parent1-parent1-age-month'] + '-' + values['parent1-parent1-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    },
    // {
    //   step: this.getEditStep('parent-1-parent-1-details'),
    //   title: 'Country of nationality',
    //   value: values['parent1-parent1-country-of-nationality']
    // }, {
    //   step: this.getEditStep('parent-1-parent-1-details'),
    //   title: 'UK passport number',
    //   value: values['parent1-parent1-passport-number']
    // }, {
    //   step: this.getEditStep('parent-1-parent-1-details'),
    //   title: 'Date of issue',
    //   value: moment(values['parent1-parent1-passport-issue-year'] + '-' + values['parent1-parent1-passport-issue-month'] + '-' + values['parent1-parent1-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    // },
    {
      step: this.getEditStep('parent1-parent1-additional-information'),
      title: 'Additional information',
      value: values['parent1-parent1-additional-information']
    });
  }
  // }

  // Parent 1's parent 2
  var parent1Parent2Fields = [];
  // if (values['parent1-parent2-first-names']) { /* If parent 1's parent 2 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent1-parent2-details',
      title: 'Maternal grandfather',
      fields: parent1Parent2Fields
    });
    parent1Parent2Fields.push({
      step: this.getEditStep('parent1-parent2-town'),
      title: 'Town of birth',
      value: values['parent1-parent2-town']
    }, {
      step: this.getEditStep('parent1-parent2-country-of-birth'),
      title: 'Country of birth',
      value: values['parent1-parent2-country-of-birth']
    }, {
      step: this.getEditStep('parent1-parent2-age-year'),
      title: 'Date of birth',
      value: moment(values['parent1-parent2-age-year'] + '-' + values['parent1-parent2-age-month'] + '-' + values['parent1-parent2-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    },
    // {
    //   step: this.getEditStep('parent-1-parent-2-details'),
    //   title: 'Country of nationality',
    //   value: values['parent1-parent2-country-of-nationality']
    // }, {
    //   step: this.getEditStep('parent-1-parent-2-details'),
    //   title: 'UK passport number',
    //   value: values['parent1-parent2-passport-number']
    // }, {
    //   step: this.getEditStep('parent-1-parent-2-details'),
    //   title: 'Date of issue',
    //   value: moment(values['parent1-parent2-passport-issue-year'] + '-' + values['parent1-parent2-passport-issue-month'] + '-' + values['parent1-parent2-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    // },
    {
      step: this.getEditStep('parent1-parent2-additional-information'),
      title: 'Additional information',
      value: values['parent1-parent2-additional-information']
    });
  }
  // }

  // Parent 2's parents
  var parent2ParentsFields = [];
  // if (values['parent2-parent1-first-names']) { /* If parent 2's parent 1 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent2-parents-details',
      title: 'Paternal grandparents',
      fields: parent2ParentsFields
    });
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
      value: moment(values['parent2-parents-marriage-year'] + '-' + values['parent2-parents-marriage-month'] + '-' + values['parent2-parents-marriage-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });
  }
  // }

  // Parent 2's parent 1
  var parent2Parent1Fields = [];
  // if (values['parent2-parent1-first-names']) { /* If parent 2's parent 1 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent2-parent1-details',
      title: 'Paternal grandmother',
      fields: parent2Parent1Fields
    });
    parent2Parent1Fields.push({
      step: this.getEditStep('parent2-parent1-town'),
      title: 'Town of birth',
      value: values['parent2-parent1-town']
    }, {
      step: this.getEditStep('parent2-parent1-country-of-birth'),
      title: 'Country of birth',
      value: values['parent2-parent1-country-of-birth']
    }, {
      step: this.getEditStep('parent2-parent1-age-year'),
      title: 'Date of birth',
      value: moment(values['parent2-parent1-age-year'] + '-' + values['parent2-parent1-age-month'] + '-' + values['parent2-parent1-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    },
    // {
    //   step: this.getEditStep('parent-2-parent-1-details'),
    //   title: 'Country of nationality',
    //   value: values['parent2-parent1-country-of-nationality']
    // }, {
    //   step: this.getEditStep('parent-2-parent-1-details'),
    //   title: 'UK passport number',
    //   value: values['parent2-parent1-passport-number']
    // }, {
    //   step: this.getEditStep('parent-2-parent-1-details'),
    //   title: 'Date of issue',
    //   value: moment(values['parent2-parent1-passport-issue-year'] + '-' + values['parent2-parent1-passport-issue-month'] + '-' + values['parent2-parent1-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    // },
    {
      step: this.getEditStep('parent2-parent1-additional-information'),
      title: 'Additional information',
      value: values['parent2-parent1-additional-information']
    });
  }
  // }

  // Parent 2's parent 2
  var parent2Parent2Fields = [];
  // if (values['parent2-parent2-first-names']) { /* If parent 2's parent 2 first name is NOT empty */
  if (values['naturalisation-registration-certificate'] == false) { /* If applicant is NOT naturalised or registered */
    response.sections.push({
      className: 'parent2-parent2-details',
      title: 'Paternal grandfather',
      fields: parent2Parent2Fields
    });
    parent2Parent2Fields.push({
      step: this.getEditStep('parent2-parent2-town'),
      title: 'Town of birth',
      value: values['parent2-parent2-town']
    }, {
      step: this.getEditStep('parent2-parent2-country-of-birth'),
      title: 'Country of birth',
      value: values['parent2-parent2-country-of-birth']
    }, {
      step: this.getEditStep('parent2-parent2-age-year'),
      title: 'Date of birth',
      value: moment(values['parent2-parent2-age-year'] + '-' + values['parent2-parent2-age-month'] + '-' + values['parent2-parent2-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    },
    // {
    //   step: this.getEditStep('parent-2-parent-2-details'),
    //   title: 'Country of nationality',
    //   value: values['parent2-parent2-country-of-nationality']
    // }, {
    //   step: this.getEditStep('parent-2-parent-2-details'),
    //   title: 'UK passport number',
    //   value: values['parent2-parent2-passport-number']
    // }, {
    //   step: this.getEditStep('parent-2-parent-2-details'),
    //   title: 'Date of issue',
    //   value: moment(values['parent2-parent2-passport-issue-year'] + '-' + values['parent2-parent2-passport-issue-month'] + '-' + values['parent2-parent2-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    // },
    {
      step: this.getEditStep('parent2-parent2-additional-information'),
      title: 'Additional information',
      value: values['parent2-parent2-additional-information']
    });
  }
  // }
  

  response.sections.push({
    className: 'application-details',
    title: 'Application',
    fields: [{
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
        value: function() {
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
    fields: [{
        step: this.getEditStep('passport-options'),
        title: 'New passport',
        value: function () {
          var output = [];
          if (values['passport-options'] == '50') {
            var cost = model.largePassport();
            cost = currency(cost);
            if (!values.veteran) {
              cost += '&nbsp;extra';
            }
            output.push('Jumbo passport with secure delivery included.');
            output.push('£85.50');
          } else {
            output.push('Standard passport with secure delivery included.');
            output.push('£75.50');
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
              output += ' secure delivery. <br/>£5.00 ';
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
          return currency(values.cost);
        }
      }
    ]
  });
  callback(null, response);
  };

module.exports = ConfirmForm;
