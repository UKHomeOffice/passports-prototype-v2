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
  'expiry-day': {
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
  'identity-options': {
      legend: {
          className: 'visuallyhidden'
      },
      options: [
        { value: true, label: 'Check address'},
        { value: false, label: 'Check address and bank'}
      ],
      formatter: ['boolean'],

  },
  'account-number': {
    labelClassName: 'visuallyhidden',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'sort-1': {
    labelClassName: 'visuallyhidden',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'sort-2': {
      labelClassName: 'visuallyhidden',
      formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'sort-3': {
      labelClassName: 'visuallyhidden',
      formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'applicant-check': {
      className: 'inline',
      legend: {
          className: 'visuallyhidden'
      },
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ],
      validate: [
        'required'
      ]
  },
  'applicant-check-friend': {
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ],
      className: 'inline',
      legend: {
          className: 'visuallyhidden'
      },
      validate: [
        'required',
        {
          type:'equal',
          arguments:['Yes'], /* if the arguments are NOT selected */
          redirect:'/../referee/applicant-summary'
        }
      ]
  },
  'applicant-check-address': {
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ],
      className: 'inline',
      legend: {
          className: 'visuallyhidden'
      },
      validate: [
        'required',
        {
          type:'equal',
          arguments:['No'],
          redirect:'/../referee/applicant-summary'
        }
      ]
  },
  'knowntime': {
      labelClassName: 'visuallyhidden',
      hint: 'We use this for stuff and nonsense',
      validate:[
          'numeric',
          'required'
      ]
  },
  'applicant-check-home-address': {
      legend: {
        value: '',
        className: 'visuallyhidden'
      },
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
          { value: 'I don’t know', label: 'I don’t know'}
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['Yes'], /* if the arguments are NOT selected */
          redirect:'/../referee/applicant-summary-name-address'
        }
      ],
      className: 'inline'
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
  },
  'retired': {
      legend: {
          className: 'form-label-bold'
      },
      options: [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' }
      ],
      formatter: ['boolean'],
      validate: [
        'required',
        {
          type:'equal',
          arguments:[true], /* if the arguments are NOT selected */
          redirect:'/../referee/csig-details-work-address'
        }
      ],
  },
  'profession': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'employer': {
      labelClassName: 'visuallyhidden',
      className: 'form-control-3-4',
      validate: [
          'required'
        ]
  },
  'employer-address': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'address-postcode': {
      className: 'input-code',
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'phone-number': {
      labelClassName: 'visuallyhidden',
      validate: [
          'numeric',
          'required'
        ]
  },
  'email-address': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  }
};
