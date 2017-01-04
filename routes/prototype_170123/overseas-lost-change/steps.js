module.exports = {
    '/':{
      fields: ['age-day', 'age-year', 'age-month'],
      backLink: '../filter-common/what-do-you-want-to-do-overseas',
      next: '/issued'
    },
    '/issued':{
        fields: ['issuing-authority', 'expiry-year', 'expiry-month'],
        backLink: './',
        next: '/france-lost-change'
      },
    '/france-lost-change': {
        backLink: './issued'
      }
};
