module.exports = {
    '/':{
      fields: ['issuing-authority', 'issue-year', 'issue-month'],
      backLink: '../filter/dob',
      next: '/afghanistan'
    },
    '/afghanistan': {
        backLink: './',
    },
    '/france': {
        backLink: './',
      }
};
