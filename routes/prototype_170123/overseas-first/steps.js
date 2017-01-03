module.exports = {
    '/':{
      fields: ['age-day', 'age-year', 'age-month'],
      backLink: '../filter-common/what-do-you-want-to-do-overseas',
      next: '/issued'
    },
    '/issued':{
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: '../filter-common/dob',
        next: '/afghanistan'
      },
    '/afghanistan': {
        backLink: './',
      }
};
