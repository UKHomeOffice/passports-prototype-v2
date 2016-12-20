const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
'passport-damaged': {
  legend: {
    value: 'Is your passport damaged?',
    className: 'visuallyhidden'
  },
  options: [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'}
  ],
  validate: [
    'required',
    {
      type:'equal',
      arguments:['No'], /* if Yes is selected */
      redirect:'https://passportapplication.service.gov.uk/ips-olc/'
    }
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
'uncancelled': {
legend: {
  value: 'Do you have any uncancelled passport from a different country?',
  className: 'visuallyhidden'
},
options: [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'}
],
validate: [
  'required',
  {
    type:'equal',
    arguments:['No'], /* if Yes is selected */
    redirect:'https://passportapplication.service.gov.uk/ips-olc/'
  }
]
},
  'british-citizen': {
    legend: {
      value: 'What nationality is shown on your passport?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'british-citizen', label: 'British Citizen'},
      {value: 'Other', label: 'Other', toggle: 'other-citizen' }
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['british-citizen'], /* if No is selected */
        redirect:'https://passportapplication.service.gov.uk/ips-olc/'
      }
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
  }

};
