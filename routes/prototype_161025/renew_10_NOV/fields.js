module.exports = {
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
    ],
    validate: [
      'required'
    ]
  },
  'name': {
      validate: [
          'required'
        ]
  },
  'lastname': {
      validate: [
          'required'
        ]
  },
  'town-birth': {
      validate: [
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
  'address1': {
      validate: [
          'required'
      ]
  },
  'address2': {
      labelClassName: 'visuallyhidden',
      formatter: 'removehyphens'
  },
  'town': {
      validate: [
          'required'
      ]
  },
  'postcode': {
      validate: [
          'required'
      ]
  },
  'email': {
      validate: [
          'required'
      ]
  },
  'mobile': {
      validate: [
          'numeric',
          'required'
      ]
  },
  'passport-options':{
    legend: {
      value: 'Passport size'
    },
    options: [
      {value: '32', label: 'Standard adult 32-page passport (£72.50)'},
      {value: '48', label: 'Jumbo adult 48-page passport (£85.50)'}
    ],
    validate: [
      'required'
    ]
  },
  'return-passport':{
    legend: {
      value: 'How would you like us to return your ols passport?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Special-delivery', label: 'Special delivery (£3 extra)'},
      {value: 'Standard', label: 'Standard post (free)'}
    ],
    validate: [
      'required'
    ]
  }
};
