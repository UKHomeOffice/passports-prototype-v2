module.exports = {
    '/':{
      fields: ['age-day', 'age-year', 'age-month'],
      backLink: '../filter-common/what-do-you-want-to-do-overseas',
      next: '/issued'
    },
    '/issued':{
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: '../filter-common/dob',
        next: '/country-born'
      },
    '/country-born': {
        controller: require('../../../controllers/application-country'),
        fields: ['application-country'],
        backLink: './',
        next: '/france-first'
      },
    '/france-first': {
        backLink: './',
      }
};
