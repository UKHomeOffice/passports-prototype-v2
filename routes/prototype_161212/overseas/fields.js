module.exports = {
    'country': {
        validate: [
            'required'
          ]
    },
  'british-citizen': {
    legend: {
      value: 'Are you a British citizen?',
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
        arguments:['Yes'], /* if No is selected */
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
      {value: 'UKPS', label: 'IPS'},
      {value: 'UKPS', label: 'Other'}
    ],
    validate: [
      'required'
    ]
  }

};
