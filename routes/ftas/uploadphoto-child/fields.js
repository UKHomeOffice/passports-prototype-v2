module.exports = {
  'submit-photo': {
    formatter: 'boolean',
    validation: 'default',
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
        value: true,
        label: 'Yes, this photo meets the rules'
      },
      {
        value: false,
        label: 'No, I want to get a different photo'
      }
    ],
    validate: [
      'required'
    ]
  },
  'photo-override': {
    formatter: 'boolean',
    validation: 'default',
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
        value: false,
        label: 'No, I\'ll provide a different photo'
      },
      {
        value: true,
        label: 'Yes, I want to submit it',
        toggle: 'reason'
      }
    ],
    validate: [
      'required'
    ],
    className: 'zero-margin-bottom'
  }

};