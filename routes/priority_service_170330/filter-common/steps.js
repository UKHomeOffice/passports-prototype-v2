module.exports = {
    '/':{
      controller: require('../../../controllers/application-country'),
      fields: ['apply-uk', 'application-country'],
      controller: require('../../../controllers/go-overseas'),
      backLink: '/../priority_service_170315/get-urgent-passport/premium-online',
      next: '/what-do-you-want-to-do', /* if Yes is selected */
      nextAlt: '../not-eligible', /* if they are from Germany/France */
      nextAltAlt:'what-do-you-want-to-do-overseas'
    },
    '/what-do-you-want-to-do': {
        fields: ['what-to-do'],
        backLink: './',
        next: '/dob'
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
      controller: require('../../../controllers/go-overseas'),
      backLink: './what-do-you-want-to-do',
      next: '/../filter', /* if they are from the UK */
      nextAlt: '../overseas', /* if they are from Germany/France */
      nextAltAlt:'../overseas-not-eligible' /* if they are from Afganistan */
    }
};
