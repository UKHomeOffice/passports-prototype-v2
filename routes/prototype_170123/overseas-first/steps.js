module.exports = {
    '/':{
      fields: ['age-day', 'age-year', 'age-month'],
      backLink: '../filter-common/what-do-you-want-to-do-overseas',
      next: '/issued'
    },
    '/issued':{
        fields: ['issuing-authority', 'expiry-year', 'expiry-month'],
        backLink: './',
        next: '/country-born'
      },
    '/country-born': {
        controller: require('../../../controllers/application-country'),
        fields: ['application-country'],
        backLink: './issued',
        next: '/france-first'
      },
    '/france-first': {
        backLink: './country-born',
      }
};
