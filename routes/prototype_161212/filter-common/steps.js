module.exports = {
    '/':{
      controller: require('../../../controllers/application-country'),
      controller: require('../../../controllers/go-overseas'),/* added this here so if you answer yes you are applying from the uk to redirect you to the index of the UK filter */
      fields: ['apply-uk', 'application-country'],
      backLink: '/../prototype_161212/startpage-overseas',
      next: '/../filter', /* if Yes is selected */
      nextAlt: '../overseas/what-do-you-want-to-do' /* added this here so if you answer yes you are applying from the uk to redirect you to the index of the UK filter */
    },
    '/what-do-you-want-to-do': {
        fields: ['what-to-do'],
        backLink: './',
        next: '/dob'
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
        backLink: './',
        next: '/passport-damaged' /* if Yes is selected */
    }
};
