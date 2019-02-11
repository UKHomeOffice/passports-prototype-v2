var _ = require('underscore');

module.exports = {
  'pex-reference': {

      legend: {
          className: 'form-label-bold'
      },
      className: 'inline',
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ]
  },
  'reference': {
      validate: [
          'required'
      ]
  },
  'postcode': {
      validate: [
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
  'age-day': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'passport-number': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'expiry-month': {
      labelClassName: 'form-label',
      validate: [
          'required'
        ]
  },
  'expiry-year': {
      labelClassName: 'form-label',
      validate: [
          'required'
        ]
  },
  'contact-csig': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'csig-email': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'csig-email-confirm': {
    labelClassName: 'visuallyhidden',
    validate: [
        'required'
      ]
  },
  'csig-name': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'csig-last-name': {
    labelClassName: 'visuallyhidden',
    validate: [
        'required'
      ]
},
  'confirm-csig-paper': {
    legend: {
        className: 'visuallyhidden'
    },
    className: 'inline',
    options: [
        { value: true, label: 'Yes', toggle: 'use-form' },
        { value: false, label: 'No' }
    ],
    formatter: ['boolean'],
    validate: [
        'required'
    ],
},
};
