module.exports = {
    '/':{
      fields: ['apply-uk', 'application-country'],
      controller: require('../../../controllers/go-overseas'),
      backLink: '/../prototype_170123/startpage',
      next: '/what-do-you-want-to-do', /* if Yes is selected */
      nextAlt: 'what-do-you-want-to-do-overseas', /* if they are from Germany/France */
      nextAltAlt:'what-do-you-want-to-do-overseas',/* if they are from Afganistan */
      nextAltAltAlt:'what-do-you-want-to-do-overseas', /* if they are from Spain - first hidden as renewal */
      nextAltAltAltAlt:'../overseas-not-available' /* if they are from Syria - not available */
    },
    '/what-do-you-want-to-do': {
        fields: ['what-to-do'],
        backLink: './',
        next: '/dob'
    },
    '/what-do-you-want-to-do-overseas': {
        controller: require('../../../controllers/go-overseas'),
        fields: ['what-to-do-overseas'],
        backLink: './',
        next: '/dob',
        nextAlt: 'dob-overseas', /* if they are from Germany/France */
        nextAltAlt: 'dob-overseas', /* if they are from Afganistan */
        nextAltAltAlt: '../overseas-first' /* if they are from Spain - first hidden as renewal */
    },
    '/dob-overseas': {
      fields: ['age-day', 'age-year', 'age-month'],
      controller: require('../../../controllers/go-overseas'),
      backLink: './',
      next: '/../filter', /* if they are from the UK */
      nextAlt: '../overseas', /* if they are from Germany/France */
      nextAltAlt:'../overseas-not-eligible', /* if they are from Afganistan */
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
      controller: require('../../../controllers/go-overseas'),
      backLink: './',
      next: '/../filter', /* if they are from the UK */
    }
};
