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
  'passport-number': {
      labelClassName: 'visuallyhidden',
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
  'national-insurance': {
      hint: 'We use this for stuff and nonsense',
      validate:[
          'required',
          function ninoformat(val) {
            return val.match('^[A-z]{2}[0-9]{6}[A-z]{1}$');
          }
      ]
  },
  'applicant-check': {
      legend: {
          className: 'form-label-bold'
      },
      validate: 'required',
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ],
      className: 'inline'
  },
  'applicant-check-friend': {
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['Yes'], /* if the arguments are NOT selected */
          redirect:'/../referee/exceptions.html'
        }
      ],
  },
  'applicant-check-address': {
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['No'],
          redirect:'/../referee/exceptions.html'
        }
      ],
  },
  'knowntime': {
      hint: 'We use this for stuff and nonsense',
      validate:[
          'numeric',
          'required'
          // function knownYears(val) {
          //   if (val < 2) return true;
          // }
      ]
  },
  'title':{
    legend: {
      value: 'Your title',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Mr', label: 'Mr'},
      {value: 'Mrs', label: 'Mrs'},
      {value: 'Miss', label: 'Miss'},
      {value: 'Ms', label: 'Ms'},
      {value: 'Other', label: 'Other', toggle: 'other-titles'}
    ],
    validate: [
      'required'
    ]
  },
  'name': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'lastname': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  }
};
