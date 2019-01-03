const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
  'rising-16': {
    legend: {
      value: 'Rising 16s',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Apply for an adult passport'
      },
      {
        value: false,
        label: 'Apply for a child passport',
      },
    ],
    labelClassName: 'form-label',
    formatter: ['boolean'],
    validate: ['required']
  },
  'application-capacity': {
    legend: {
      value: 'Who is the new passport for?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'I’m helping someone to apply online',
      },
      {
        value: false,
        label: 'The applicant doesn’t have mental or physical capacity',
        toggle: 'adult-no-capacity'
      }
    ],
    validate: ['required'],
    formatter: ['boolean']
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
        label: 'Yes',
        toggle: 'lost-stolen'
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
  'lost-stolen-reported': {
    legend: {
      value: 'Have you reported it?',
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes',
        toggle: 'lost-stolen-reported'
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
  'lost-reference': {
    labelClassName: 'visuallyhidden',
    validate: [
      'required'
    ]
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
    }].concat(_.map(countries.filter(function (c) {
      if (c.countryCode.split('.').pop() === "GB") {
        return false; // skip
      }
      return true
    }), function (c) {
      return {
        value: c.displayName,
        label: c.displayName
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
  'country-birth': {
    options: [{
      value: '',
      label: ' '
    }].concat(_.map(countries, function (c) {
      return {
        value: c.countryCode,
        label: c.displayName
      }
    })),
    validate: [
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
        label: 'Yes',
        toggle: 'damaged-reason',
        child: 'textarea'
      },
      {
        value: 'No',
        label: 'No'
      }
    ],
    validate: [
      'required'
    ]
  },
  'damaged-reason': {
    validate: [
      'required',
      {
        type: 'maxlength',
        arguments: 250
      }
    ],
    dependent: {
      field: 'passport-damaged',
      value: 'Yes'
    },
    attributes: [{
        attribute: 'spellcheck',
        value: 'true'
      },
      {
        attribute: 'autocapitalize',
        value: 'sentences'
      }
    ],
    className: 'textarea',
    labelClassName: 'form-label'
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
  'passport-issuing-authority': {
    legend: {
      value: 'Which is your passport issuing authority?',
      className: 'form-label-bold'
    },
    options: [{
        value: 'UKPA, UKPS, IPS or HMPO',
        label: 'UKPA, UKPS, IPS or HMPO',
      },
      {
        value: 'Other',
        label: 'Other'
      }
    ],
    className: 'inline'
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
  'british-citizen': {
    legend: {
      value: 'What nationality is written on your passport?',
      className: 'visuallyhidden'
    },
    options: [{
      value: 'British Citizen',
      label: 'British Citizen'
    }, {
      value: 'British National Overseas',
      label: 'British National Overseas'
    }, {
      value: 'Other',
      label: 'Other'
    }],
    validate: [
      'required'
    ],
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
  }
};