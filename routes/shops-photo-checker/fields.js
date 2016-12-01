var _ = require('underscore');

module.exports = {
  'what-are-you': {
    legend: {
      value: 'What are you?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'company', label: 'I am from a company that provides passport photos'},
      {value: 'individual', label: 'I am an individual'},
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['company'], /* if the arguments are NOT selected */
        redirect:'/shops-photo-checker/upload-only' /* This link doesn't work and I don't know why */
      }
    ]
  },

  'companyName': {
      validate: [
          'required'
      ]
  },
  'postcode': {
      validate: [
          'required'
      ]
  }
  };
