module.exports = {
    '/':{
      fields: ['age-day', 'age-year', 'age-month'],
      backLink: '../filter-common/what-do-you-want-to-do-overseas',
      next: '/issued'
    },
    '/issued':{
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: './',
        next: '/france-lost-change'
      },
    '/france-lost-change': {
        backLink: './issued'
      }
};
