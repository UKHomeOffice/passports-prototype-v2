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
'collect': {
  legend: {
    value: 'Can you collect your passport in person',
    className: 'visuallyhidden'
  },
  options: [
    { value: true, label: 'Yes' },
    { value: false, label: 'No', toggle: 'cannot-collect' }
  ],
  formatter: ['boolean'],
  validate: [
    'required'
  ]
},
'second': {
  legend: {
    value: 'Can you collect your passport in person',
    className: 'visuallyhidden'
  },
  options: [
    { value: true, label: 'Yes', toggle: 'apply-second' },
    { value: false, label: 'No' }
  ],
  formatter: ['boolean'],
  validate: [
    'required'
  ]
}
};
