const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
  'application-for': {
    legend: {
      value: 'Who is the new passport for?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Me'
      },
      {
        value: false,
        label: 'Someone else',
      },
    ],
    formatter: ['boolean'],
    validate: ['required']
  },
  'application-for-why': {
    legend: {
      value: 'Who is the new passport for?',
      className: 'visuallyhidden'
    },
    options: [
      {
        value: 'adult-supported',
        label: 'I’m helping someone to apply online',
      },
      {
        value: 'adult-no-capacity',
        label: 'The applicant doesn’t have mental or physical capacity',
        toggle: 'adult-no-capacity'
      }
    ],
    validate: ['required'],
  },
  'what-to-do': {
    legend: {
      value: 'What to you want to do?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'First',
        label: 'Apply for a first British passport'
      },
      {
        value: 'Change',
        label: 'Make a change to a current British passport (including a change of name)'
      },
      {
        value: 'Renew',
        label: 'Renew a British passport'
      },
      {
        value: 'Replace',
        label: 'Replace a lost or stolen British passport'
      }
    ],
    validate: [
      'required',
      {
        type: 'equal',
        arguments: ['Renew'],
        /* if the arguments are NOT selected */
        redirect: 'https://passportapplication.service.gov.uk/ips-olc/'
      }
    ]
  },
  'what-to-do-overseas': {
    legend: {
      value: 'What to you want to do?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'First',
        label: 'Apply for a first British passport'
      },
      {
        value: 'Change',
        label: 'Make a change to a current British passport (including a change of name)'
      },
      {
        value: 'Renew',
        label: 'Renew a British passport'
      },
      {
        value: 'Replace',
        label: 'Replace a lost or stolen British passport'
      }
    ],
    validate: [
      'required',
      {
        type: 'equal',
        arguments: ['Renew', 'Change', 'Replace'],
        /* if the arguments are NOT selected */
        redirect: '/../overseas-first'
      },
      {
        type: 'equal',
        arguments: ['Renew', 'First'],
        /* if the arguments are NOT selected */
        redirect: '/../overseas-lost-change'
      }
    ]
  },
  'apply-uk': {
    legend: {
      value: 'Are you applying from the UK?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No',
        toggle: 'application-country',
        child: 'select'
      }
    ],
    formatter: ['boolean'],
    /*validate: [
        'required'
    ],*/
    className: 'inline'
  },
  '16-or-older': {
    legend: {
      value: 'Are you 16 or older?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No'
      }
    ],
    formatter: ['boolean'],
    validate: [
      'required',
      {
        type: 'equal',
        arguments: [true], // If they are BELOW 16
        redirect: 'https://passportapplication.service.gov.uk/ips-olc/'
      }
    ],
    className: 'inline'
  },
  'passport-before': {
    legend: {
      value: 'Have you had a passport before?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No',
        toggle: 'passport-before-no'
      }
    ],
    formatter: ['boolean'],
    validate: [
      'required'
    ],
    className: 'inline'
  },
  'lost-stolen': {
    legend: {
      value: 'Lost stolen?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No'
      }
    ],
    formatter: ['boolean'],
    validate: [
      'required'
    ],
    className: 'inline'
  },
  'passport-colour': {
    legend: {
      value: 'What colour of UK passport did you have before?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'red',
        label: 'Red'
      },
      {
        value: 'black-blue',
        label: 'Dark blue'
      }
    ],
    // formatter: ['boolean'],
    validate: [
      'required'
    ],
    className: 'inline'
  },
  'naturalisation-registration-certificate': {
    formatter: 'boolean',
    validation: 'default',
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No'
      }
    ],
    className: 'inline'
  },
  'name-changed': {
    legend: {
      value: 'Lost stolen?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No'
      }
    ],
    formatter: ['boolean'],
    validate: [
      'required',
      {
        type: 'equal',
        arguments: [false],
        /* if the arguments are NOT selected */
        redirect: '/application-method'
      }
    ],
    className: 'inline'
  },
  'application-country': {
    options: [{
      value: '',
      label: ' '
    }].concat(_.map(countries, function(c) {
      return {
        value: c.id,
        label: c.name,
        attributes: [{
          attribute: 'data-synonyms',
          value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
        }]
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
  },

  'passport-damaged': {
    legend: {
      value: 'Is your passport damaged?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'Yes',
        label: 'Yes'
      },
      {
        value: 'No',
        label: 'No'
      }
    ],
    validate: [
      'required',
      {
        type: 'equal',
        arguments: ['No'],
        /* if Yes is selected */
        redirect: 'https://passportapplication.service.gov.uk/ips-olc/'
      }
    ]
  },
  'issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    validate: [
      'numeric',
      'required'
    ]
  },
  'issue-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    validate: [
      'numeric',
      'required'
    ]
  },
  'issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    validate: [
      'numeric',
      'required'
    ]
  },
  'dual-nationality': {
    legend: {
      value: 'Do you have any uncancelled passport from other countries?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes',
        toggle: 'same-name'
      },
      {
        value: false,
        label: 'No'
      }
    ],
    formatter: ['boolean'],
    validate: [
      'required'
    ]
  },
  'uncancelled': {
    legend: {
      value: 'Do you have any uncancelled passport from a different country?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'Yes',
        label: 'Yes',
        toggle: 'which-passport'
      },
      {
        value: 'No',
        label: 'No'
      }
    ]
  },
  'relationship-applicant': {
    legend: {
      value: 'What is your relationship to the applicant?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'Mother',
        label: 'Mother'
      },
      {
        value: 'Father',
        label: 'Father'
      },
      {
        value: 'Social Worker',
        label: 'Social Worker'
      },
      {
        value: 'Other',
        label: 'Other',
        toggle: "relationship-other"
      }
    ],
    validate: [
      'required'
    ]
  },
  'other-why-apply': {
    labelClassName: 'visuallyhidden',
    className: 'textarea',
  },
  'relationship-other': {
    labelClassName: 'visuallyhidden',
  },
  'relationship-applicant-other': {
    legend: {
      value: 'What is your relationship to the applicant?',
      className: 'visuallyhidden'
    },
    options: [{
        value: 'Social Worker',
        label: 'Social Worker'
      },
      {
        value: 'Carer',
        label: 'Carer'
      },
      {
        value: 'Solicitor',
        label: 'Solicitor'
      },
      {
        value: 'Social Worker',
        label: 'Social Worker'
      },
      {
        value: 'Other',
        label: 'Other',
        toggle: 'relationship-other',
      }
    ],
    validate: [
      'required'
    ]
  },
  'parental-responsibility': {
    legend: {
      value: 'Do you have parental responsibility?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes'
      },
      {
        value: false,
        label: 'No',
        toggle: "parental-no"
      }
    ],
    formatter: ['boolean'],
    validate: [
      'required'
    ],
    className: 'inline'
  },
  'third-party-first-name': {
    labelClassName: 'form-label-bold',
    validate: [
      'required'
    ]
  },
  'third-party-last-name': {
    labelClassName: 'form-label-bold',
    validate: [
      'required'
    ]
  }
};
