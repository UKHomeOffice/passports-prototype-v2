const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
'expiry-year': {
  labelClassName: 'form-label',
  formatter: 'removehyphens',
    validate: [
        'numeric',
        'required'
    ]
},
'expiry-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    validate: [
        'numeric',
        'required'
    ]
},
  'age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'age-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'issuing-authority': {
    legend: {
      value: 'Which is your passport issuing authority?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'UKPA', label: 'UKPA'},
      {value: 'UKPS', label: 'UKPS'},
      {value: 'IPS', label: 'IPS'},
      {value: 'Other', label: 'Other'}
    ],
    validate: [
      'required'
    ]
  },
  'application-country': {
      options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
          return {
              value: c.id,
              label: c.name,
              attributes: [
                  {
                      attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                  }
              ]
          }
      })),
      validate: [
          'required'
      ],
      groupAttributes: [
          { attribute: 'data-previous-value', value: '{{values.typeahead}}' }
      ]
  }
};
