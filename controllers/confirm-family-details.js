var util = require('util'),
  _ = require('underscore'),
  moment = require('moment');

var SessionForm = require('./form-family-details'),
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

  var parentsFields = [];
  if (values['parent1-first-names']) {
    response.sections.push({
      className: 'parents-details',
      title: 'Parents’ details',
      fields: parentsFields
    });
    parentsFields.push({
      step: this.getEditStep('parents-details'),
      title: 'Parent 1’s name',
      value: join(values, ['parent1-first-names', 'parent1-last-name'])
    }, {
      step: this.getEditStep('parents-details'),
      title: 'Parent 2’s name',
      value: join(values, ['parent2-first-names', 'parent2-last-name'])
    }, {
      step: this.getEditStep('parents-details'),
      title: 'Marriage date',
      value: moment(values['marriage-year'] + '-' + values['marriage-month'] + '-' + values['marriage-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });
  }

  var parent1Fields = [];
  if (values['parent1-first-names']) {
    response.sections.push({
      className: 'parent1-details',
      title: values['parent1-first-names'].concat('’s details'),
      fields: parent1Fields
    });
    parent1Fields.push({
      step: this.getEditStep('parent-1-details'),
      title: 'Town of birth',
      value: values['parent1-town']
    }, {
      step: this.getEditStep('parent-1-details'),
      title: 'Country of birth',
      value: values['parent1-country']
    }, {
      step: this.getEditStep('parent-1-details'),
      title: 'Date of birth',
      value: moment(values['parent1-age-year'] + '-' + values['parent1-age-month'] + '-' + values['parent1-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
      step: this.getEditStep('parent-1-details'),
      title: 'Nationality',
      value: values['parent1-nationality']
    }, {
      step: this.getEditStep('parent-1-details'),
      title: 'Passport number',
      value: values['parent1-passport-number']
    }, {
      step: this.getEditStep('parent-1-details'),
      title: 'Date of issue',
      value: moment(values['parent1-passport-issue-year'] + '-' + values['parent1-passport-issue-month'] + '-' + values['parent1-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });
  }

  var parent2Fields = [];
  if (values['parent2-first-names']) {
    response.sections.push({
      className: 'parent2-details',
      title: values['parent2-first-names'].concat('’s details'),
      fields: parent2Fields
    });
    parent2Fields.push({
      step: this.getEditStep('parent-2-details'),
      title: 'Town of birth',
      value: values['parent2-town']
    }, {
      step: this.getEditStep('parent-2-details'),
      title: 'Country of birth',
      value: values['parent2-country']
    }, {
      step: this.getEditStep('parent-2-details'),
      title: 'Date of birth',
      value: moment(values['parent2-age-year'] + '-' + values['parent2-age-month'] + '-' + values['parent2-age-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    }, {
      step: this.getEditStep('parent-2-details'),
      title: 'Nationality',
      value: values['parent2-nationality']
    }, {
      step: this.getEditStep('parent-2-details'),
      title: 'Passport number',
      value: values['parent2-passport-number']
    }, {
      step: this.getEditStep('parent-2-details'),
      title: 'Date of issue',
      value: moment(values['parent2-passport-issue-year'] + '-' + values['parent2-passport-issue-month'] + '-' + values['parent2-passport-issue-day'], 'YYYY-MM-DD').format('D MMMM YYYY')
    });
  }

  callback(null, response);
  };

module.exports = ConfirmForm;