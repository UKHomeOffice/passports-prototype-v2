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
        controller: require('../../../controllers/go-overseas'),
        fields: ['application-country'],
        backLink: './issued',
        next: 'france-first',
        nextAlt: 'france-first',
        nextAltAltAlt: 'spain-first' /* if they are from Spain - first hidden as renewal */
      },
    '/france-first': {
        backLink: './country-born',
      },
    '/spain-first': {
        backLink: './country-born',
      }
};
