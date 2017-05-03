module.exports = {
    '/':{
      fields: ['apply-uk-temp'],
      backLink: '/../prototype_170123/startpage-temp',
      next: '/what-do-you-want-to-do', /* if Yes is selected */
    },
    '/what-do-you-want-to-do': {
        fields: ['what-to-do'],
        backLink: './',
        next: '/dob'
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
      controller: require('../../../controllers/go-overseas'),
      backLink: './',
      next: '/../filter', /* if they are from the UK */
      nextAlt: '../overseas' /* if they are from overseas */
    }
};
