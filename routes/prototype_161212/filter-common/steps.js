module.exports = {
    '/':{
      controller: require('../../../controllers/application-country'),
      fields: ['apply-uk', 'application-country'],
      backLink: '/../prototype_161212/startpage',
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
      nextAlt: '../overseas', /* if they are from Germany/France */
      nextAltAlt:'../overseas-not-eligible' /* if they are from Afganistan */
    }
};
