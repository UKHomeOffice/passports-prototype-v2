module.exports = {
    '/':{
      fields: ['issuing-authority', 'age-year', 'age-month'],
      backLink: '../filter-common/dob',
      next: '/afghanistan'
    },
    '/afghanistan': {
        backLink: './',
    },
    '/france': {
        backLink: './',
      }
};
