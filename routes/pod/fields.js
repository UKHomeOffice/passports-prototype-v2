var _ = require('underscore');

module.exports = {
  'pex-reference': {
  legend: {
    value: 'Does your application start with PEX or POD?',
    className: 'visuallyhidden'
  },
  options: [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ]
},




  'reference-no': {
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
  }

};
