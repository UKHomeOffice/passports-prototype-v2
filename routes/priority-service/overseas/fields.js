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
className: 'inline',
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
'dual-national-country': {
  labelClassName: 'visuallyhidden',
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
    groupAttributes: [
        { attribute: 'data-previous-value', value: '{{values.typeahead}}' }
    ],
    dependent: {
        field: 'uncancelled',
        value: true
    }
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
  },
  'try-service': {
  legend: {
    value: 'Do you have any uncancelled passport from a different country?',
    className: 'visuallyhidden'
  },
  options: [
    {value: 'Yes', label: 'Yes, I&#39;d like to try the new service'},
    {value: 'No', label: 'No, I&#39;d prefer not to'}
  ],
  validate: [
    'required',
    {
      type:'equal',
      arguments:['Yes'], /* if No is selected */
      redirect:'/../overseas-not-eligible/france'
    }
  ]
  }

};
