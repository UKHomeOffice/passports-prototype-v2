var _ = require('underscore');

module.exports = {
  'passport-damaged': {
    legend: {
      value: 'Is your passport damaged?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Yes', label: 'Yes', toggle: 'damaged-info'},
      {value: 'No', label: 'No'}
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['No'], /* if Yes is selected */
        redirect:'/read-passport-number'
      }
    ]
  },
  'front-cover-damaged': {
    formatter: 'boolean-strict',
    legend: {
      value: 'Front cover'
    }
  },
  'back-cover-damaged': {
    formatter: 'boolean-strict',
    legend: {
      value: 'Back cover'
    }
  },
  'photo-page-damaged': {
    formatter: 'boolean-strict',
    legend: {
      value: 'Photo page'
    }
  },
  'emergency-contact-damaged': {
    formatter: 'boolean-strict',
    legend: {
      value: 'Emergency contact page'
    }
  },
  'other-pages-damaged': {
    formatter: 'boolean-strict',
    legend: {
      value: 'Any other pages'
    }
  },
  'chip-damaged': {
    formatter: 'boolean-strict',
    legend: {
      value: 'Chip (e-passports only)'
    }
  },
  'what-damaged': {
    labelClassName: 'visuallyhidden',
    validate: [
        'required'
      ]
  },
  'how-damaged': {
    labelClassName: 'visuallyhidden',
    className: 'textarea',
    validate: [
      'required',
      { type: 'maxlength', arguments: 250 }
    ],
  },
  'read-passport-number': {
    legend: {
      value: 'Is your passport damaged?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Yes', label: 'Yes', toggle: 'read-number'},
      {value: 'No', label: 'No'}
    ],
    validate: [
      'required'

    ]
  },
  'passport-number': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'number-illegible': {
    formatter: 'boolean-strict',
    legend: {
      value: 'I can’t read my old passport number'
    },
  },
  'can-sign': {
    legend: {
      className: 'visuallyhidden'
    },
    formatter: 'boolean',
    validate: ['required'],
    options: [
      {
        value: true,
        label: 'I understand and will sign my passport',
      },
      {
        value: false,
        label: 'I can’t sign my name',
        toggle: 'no-sign'
      }
    ]
  },
  'no-sign-reason': {
    className: 'textarea',
    validate: [
      'required',
      { type: 'maxlength', arguments: 250 }
    ],
    dependent: {
      field: 'can-sign',
      value: false
    }
  },
  'expiry-year-damaged': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'expiry-month-damaged': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'expiry-day-damaged': {
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
      {value: 'Other', label: 'Other', toggle: 'other-titles'}
    ],
    validate: [
      'required'
    ]
  },
  'name': {

  },
  'lastname': {

  },
  'previous-name': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          className: 'form-label-bold'
      },
      className: 'inline',
      options: [
          { value: true, label: 'Yes', toggle: 'previous-names', child: 'input-text' },
          { value: false, label: 'No' }
      ]
  },
  'previous-names': {
      validate: [
          'required',
          { type: 'maxlength', arguments: 100 }
      ],
      dependent: {
          field: 'previous-name',
          value: true
      }
  },
  'gender': {
      validate: [
          'required'
      ],
      legend: {
          value: 'Your gender',
          className: 'visuallyhidden'
      },
      options: [
          { value: 'F', label: 'Female' },
          { value: 'M', label: 'Male' }
      ]
  },
  'town-of-birth': {
      validate: [
          'required'
        ]
  },
  'born-in-uk': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          className: 'form-label-bold'
      },
      options: [
          { value: true, label: 'Yes' },
          { value: false, label: 'No', toggle: 'birth-country' }
      ],
      className: 'inline'
  },
  'country-of-birth': {
      validate: 'required',
      dependent: {
          field: 'born-in-uk',
          value: false
      },
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
  'address3': {
      labelClassName: 'visuallyhidden',
      formatter: 'removehyphens'
  },
  'address4': {
      labelClassName: 'visuallyhidden',
      formatter: 'removehyphens'
  },
  'address5': {
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
  'country-code': {
    labelClassName: 'visuallyhidden',
    formatter: 'removehyphens',
    validate: [
        'required'
    ]
  },
  'application-country-code': {
    labelClassName: 'visuallyhidden',
    formatter: 'removehyphens',
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
  'mobile-overseas': {
    labelClassName: 'visuallyhidden',
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
  'passport-size': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          value: 'What size passport would you like?',
          className: 'form-label'
      },
      options: [
          { value: false, label: '32-page passport (free)' },
          { value: true, label: '48-page passport ({{#currency}}{{largePassportCost}}{{/currency}})' }
      ],
      dependent: {
          field: 'passport-size-dependent',
          value: 'true'
      }
  },
  'passport-options-overseas':{
    legend: {
      value: 'Passport size'
    },
    options: [
      {value: '32', label: 'Standard adult 32-page passport (£83)'},
      {value: '48', label: 'Jumbo adult 48-page passport (£91)'}
    ],
    validate: [
      'required'
    ]
  },
  braille: {
    formatter: 'boolean-strict',
    legend: {
      value: 'Add a Braille sticker'
    },
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
  },
  'secure-return': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          value: 'How would you like us to send your old passport back to you?',
          className: 'form-label-bold'
      },
      options: [
          { value: true, label: 'Special delivery (&#163;3 extra)' },
          { value: false, label: 'Standard post (free)' }
      ]
  },
};
