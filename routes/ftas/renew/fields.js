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
    labelClassName: 'visuallyhidden',
    legend: {
      className: 'visuallyhidden'
    },
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
    validate: [
      'required'
    ]
  },
  'lastname': {
    validate: [
      'required'
    ]
  },
  'change-name': {
      legend: {
        value: 'If you\'ve been naturalised or registered, tell us if this name is on your UK citizenship certificate.',
        className: 'form-hint'
      },
      options: [
          { value: false, label: 'Yes' },
          { value: true, label: 'No, my name has changed', toggle: 'note-regarding-name-change' }
      ],
      formatter: ['boolean'],
      validate: [
        'required'
      ]
  },
  'change-of-name-reason':{
    legend: {
      value: 'Your title',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Marriage-or-civil-partnership', label: 'Marriage or civil partnership'},
      {value: 'Divorce', label: 'Divorce'},
      {value: 'Gender-reassigment', label: 'Gender transition'},
      {value: 'I-changed-my-name-another-way', label: 'I changed my name another way'}
    ],
    validate: [
      'required'
    ]
  },
  'previous-name': {
      formatter: ['boolean'],
      validate: [
        'required'
      ],
      legend: {
          className: 'visually-hidden'
      },
      className: 'inline',
      options: [
          { value: true, label: 'Yes', toggle: 'previous-names' },
          { value: false, label: 'No' }
      ]
  },
  'previous-last-name': {

  },
  'previous-first-name': {

  },
  'gender': {
      validate: [
          'required'
      ],
      legend: {
          value: 'Your gender',
          className: 'visuallyhidden'
      },
      className: "inline",
      options: [
          { value: 'F', label: 'Female' },
          { value: 'M', label: 'Male' }
      ]
  },
  'town-of-birth': {
    labelClassName: 'visuallyhidden',
    legend: {
      className: 'visuallyhidden'
    }
    // validate: [
    //   'required'
    // ]
  },
  'born-in-uk': {
    formatter: 'boolean',
    validate: 'required',
    legend: {
        value: 'Were you born in the UK?',
        className: 'form-label-bold'
    },
    options: [
        { value: true, label: 'Yes' },
        { value: false, label: 'No', toggle: 'birth-country' }
    ],
    className: 'inline'
  },
  'naturalisation-registration-certificate': {
    formatter: 'boolean',
    validation: 'default',
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      { value: true, label: 'Yes', toggle: 'naturalisation-registration-certificate-details' },
      { value: false, label: 'No' }
    ],
    className: 'inline'
  },
  'naturalisation-registration-certificate-number': {
    validate: [
        'required'
      ],
    dependent: {
      field: 'naturalisation-registration-certificate',
      value: true
    }
  },
  'naturalisation-registration-certificate-issue-day': {
    labelClassName: 'form-label',
    validate: [
        'required'
      ],
    dependent: {
      field: 'naturalisation-registration-certificate',
      value: true
    }
  },
  'naturalisation-registration-certificate-issue-month': {
    labelClassName: 'form-label',
    validate: [
        'required'
      ],
    dependent: {
      field: 'naturalisation-registration-certificate',
      value: true
    }
  },
  'naturalisation-registration-certificate-issue-year': {
    labelClassName: 'form-label',
    validate: [
        'required'
      ],
    dependent: {
      field: 'naturalisation-registration-certificate',
      value: true
    }
  },
  'country-of-birth': {
    // validate: 'required',
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
  'parents-married': {
    legend: {
      value: 'Parents married',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Yes', label: 'Yes', toggle: 'marriage-date'},
      {value: 'No', label: 'No'},
      {value: 'I don’t know', label: 'I don’t know'}
    ],
    validate: [
      'required'
    ],
    className: 'inline'
  },

  // Parents
  'marriage-day': {
    labelClassName: 'form-label',
  },
  'marriage-year': {
    labelClassName: 'form-label',
  },
  'marriage-month': {
    labelClassName: 'form-label',
  },

  // Parent 1
  'parent1-first-names': {
    labelClassName: 'form-label'

  },
  'parent1-last-name': {
    labelClassName: 'form-label'

  },
  'parent1-country-of-birth': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent1-age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-age-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-country-of-nationality': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent1-passport-number': {
    labelClassName: 'visuallyhidden',
    // validate: [
    //   'required'
    // ]
  },
  'parent1-passport-issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-passport-issue-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-passport-issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-additional-information': {
    className: 'textarea',
    labelClassName: 'form-label-bold'
    // validate: [
    //   'required',
    //   { type: 'maxlength', arguments: 250 }
    // ],
    // dependent: {
    //   field: 'can-sign',
    //   value: false
    // }
  },

  // Parent 2
  'parent2-first-names': {
    labelClassName: 'form-label'

  },
  'parent2-last-name': {
    labelClassName: 'form-label'

  },
  'parent2-country-of-birth': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent2-age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-age-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-country-of-nationality': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent2-passport-number': {
    labelClassName: 'visuallyhidden',
    // validate: [
    //   'required'
    // ]
  },
  'parent2-passport-issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-passport-issue-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-passport-issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-additional-information': {
    className: 'textarea',
    labelClassName: 'form-label-bold'
    // validate: [
    //   'required',
    //   { type: 'maxlength', arguments: 250 }
    // ],
    // dependent: {
    //   field: 'can-sign',
    //   value: false
    // }
  },

  // Parent 1's parents
  'parent1-parents-married': {
    legend: {
      value: 'Parents married',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Yes', label: 'Yes', toggle: 'marriage-date'},
      {value: 'No', label: 'No'},
      {value: 'I don’t know', label: 'I don’t know'}
    ],
    validate: [
      'required'
    ],
    className: 'inline'
  },
  'parent1-parents-marriage-day': {
    labelClassName: 'form-label',
  },
  'parent1-parents-marriage-year': {
    labelClassName: 'form-label',
  },
  'parent1-parents-marriage-month': {
    labelClassName: 'form-label',
  },

  // Parent 1's parent 1
  'parent1-parent1-first-names': {
    labelClassName: 'form-label'

  },
  'parent1-parent1-last-name': {
    labelClassName: 'form-label'

  },
  'parent1-parent1-country-of-birth': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent1-parent1-age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-parent1-age-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-parent1-age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-parent1-country-of-nationality': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent1-parent1-passport-number': {
    labelClassName: 'visuallyhidden',
    // validate: [
    //   'required'
    // ]
  },
  'parent1-parent1-passport-issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-parent1-passport-issue-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-parent1-passport-issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-parent1-additional-information': {
    className: 'textarea',
    labelClassName: 'form-label-bold'
    // validate: [
    //   'required',
    //   { type: 'maxlength', arguments: 250 }
    // ],
    // dependent: {
    //   field: 'can-sign',
    //   value: false
    // }
  },

  // Parent 1's parent 2
  'parent1-parent2-first-names': {
    labelClassName: 'form-label'

  },
  'parent1-parent2-last-name': {
    labelClassName: 'form-label'

  },
  'parent1-parent2-country-of-birth': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent1-parent2-age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-parent2-age-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-parent2-age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent1-parent2-country-of-nationality': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent1-parent2-passport-number': {
    labelClassName: 'visuallyhidden',
    // validate: [
    //   'required'
    // ]
  },
  'parent1-parent2-passport-issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-parent2-passport-issue-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-parent2-passport-issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent1-parent2-additional-information': {
    className: 'textarea',
    labelClassName: 'form-label-bold'
    // validate: [
    //   'required',
    //   { type: 'maxlength', arguments: 250 }
    // ],
    // dependent: {
    //   field: 'can-sign',
    //   value: false
    // }
  },

  // Parent 2's parents
  'parent2-parents-married': {
    legend: {
      value: 'Parents married',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Yes', label: 'Yes', toggle: 'marriage-date'},
      {value: 'No', label: 'No'},
      {value: 'I don’t know', label: 'I don’t know'}
    ],
    validate: [
      'required'
    ],
    className: 'inline'
  },
  'parent2-parents-marriage-day': {
    labelClassName: 'form-label',
  },
  'parent2-parents-marriage-year': {
    labelClassName: 'form-label',
  },
  'parent2-parents-marriage-month': {
    labelClassName: 'form-label',
  },

  // Parent 2's parent 1
  'parent2-parent1-first-names': {
    labelClassName: 'form-label'

  },
  'parent2-parent1-last-name': {
    labelClassName: 'form-label'

  },
  'parent2-parent1-country-of-birth': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent2-parent1-age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-parent1-age-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-parent1-age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-parent1-country-of-nationality': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent2-parent1-passport-number': {
    labelClassName: 'visuallyhidden',
    // validate: [
    //   'required'
    // ]
  },
  'parent2-parent1-passport-issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-parent1-passport-issue-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-parent1-passport-issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-parent1-additional-information': {
    className: 'textarea',
    labelClassName: 'form-label-bold'
    // validate: [
    //   'required',
    //   { type: 'maxlength', arguments: 250 }
    // ],
    // dependent: {
    //   field: 'can-sign',
    //   value: false
    // }
  },

  // Parent 2's parent 2
  'parent2-parent2-first-names': {
    labelClassName: 'form-label'

  },
  'parent2-parent2-last-name': {
    labelClassName: 'form-label'

  },
  'parent2-parent2-country-of-birth': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent2-parent2-age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-parent2-age-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-parent2-age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    // validate: [
    //   'numeric',
    //   'required'
    // ]
  },
  'parent2-parent2-country-of-nationality': {
    labelClassName: 'visuallyhidden',
    // options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    //   return {
    //     value: c.id,
    //     label: c.name,
    //     attributes: [
    //       {
    //         attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
    //       }
    //     ]
    //   }
    // }))
  },
  'parent2-parent2-passport-number': {
    labelClassName: 'visuallyhidden',
    // validate: [
    //   'required'
    // ]
  },
  'parent2-parent2-passport-issue-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-parent2-passport-issue-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-parent2-passport-issue-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      // validate: [
      //     'numeric',
      //     'required'
      // ]
  },
  'parent2-parent2-additional-information': {
    className: 'textarea',
    labelClassName: 'form-label-bold'
    // validate: [
    //   'required',
    //   { type: 'maxlength', arguments: 250 }
    // ],
    // dependent: {
    //   field: 'can-sign',
    //   value: false
    // }
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
    labelClassName: 'visuallyhidden',
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
      {value: '34', label: 'Standard adult 34-page passport (£75.50)'},
      {value: '50', label: 'Jumbo adult 50-page passport (£85.50)'}
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
      {value: 'Special-delivery', label: 'Secure delivery (£5 extra)'},
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
          value: '',
          className: 'form-label-bold'
      },
      options: [
          { value: true, label: 'Secure delivery (£5 extra)' },
          { value: false, label: 'Standard post (free)' }
      ]
  },
};