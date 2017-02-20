const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
  'what-to-do': {
    legend: {
      value: 'What to you want to do?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'First', label: 'Apply for a first British passport'},
      {value: 'Change', label: 'Make a change to a current British passport (including a change of name)'},
      {value: 'Renew', label: 'Renew a British passport'},
      {value: 'Replace', label: 'Replace a lost or stolen British passport'}
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['Renew'], /* if the arguments are NOT selected */
        redirect:'https://passportapplication.service.gov.uk/ips-olc/'
      }
    ]
  },
'apply-uk-temp': {
  legend: {
    value: 'Are you applying from the UK?',
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
      arguments:['Yes'], /* if Yes is selected */
      redirect:'https://www.gov.uk/overseas-passports'
    }
  ],
  className: 'inline'
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
  }
};
