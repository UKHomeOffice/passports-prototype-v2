const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
  'passport-number': {
      labelClassName: 'visuallyhidden',
      validate: [
          'required'
        ]
  },
  'uncancelled': {
  legend: {
    value: 'Do you have any uncancelled passport from a different country?',
    className: 'visuallyhidden'
  },
  options: [
    {value: 'Yes', label: 'Yes', toggle: 'which-passport'},
    {value: 'No', label: 'No'}
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['No'], /* if Yes is selected */
        redirect:'/dual-national-details'
      }
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
    dependent: {
      field: 'apply-uk',
      value: false
    }
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
  'change-name': {
      legend: {
        value: 'Does this match the name on your old passport?',
        className: 'visuallyhidden'
      },
      options: [
          { value: false, label: 'Yes, it matches the name in my old passport', toggle: '', child: '' },
          { value: true, label: 'No, my name has changed' }
      ],
      formatter: ['boolean'],
      validate: [
        'required',
        {
          type:'equal',
          arguments:[false], /* if the arguments are NOT selected */
          redirect:'/change-of-name'
        }
      ],
  },
  'change-of-name-reason':{
    legend: {
      value: 'Your title',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Marriage', label: 'Through marriage or civil partnership'},
      {value: 'Divorce', label: 'I’m divorced and want to go back to a previous name'},
      {value: 'Small', label: 'I want to make a small change to my forenames'},
      {value: 'Gender', label: 'I’ve changed my name and gender'},
      {value: 'Other', label: 'Other type of name change '}
    ],
    validate: [
      'required'
    ]
  },
  'previous-name': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          className: 'form-label-bold'
      },
      className: 'inline',
      options: [
          { value: true, label: 'Yes', toggle: 'previous-names' },
          { value: false, label: 'No' }
      ]
  },
  'previous-last-name-1': {

  },
  'previous-first-name-1': {

  },
  'previous-last-name-2': {

  },
  'previous-first-name-2': {

  },
  'previous-last-name-3': {

  },
  'previous-first-name-3': {

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
  'expiry-day': {
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
