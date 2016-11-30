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
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './apply-from-uk',
        next: '/passport-expiry' /* if No is selected */
    },
    '/passport-expiry': {
      fields: ['expiry-year', 'expiry-month'],
        backLink: './passport-damaged',
        next: '/uncancelled'
    },
    '/uncancelled': {
        controller: require('../../../controllers/go-overseas'),
        fields: ['uncancelled'],
        backLink: './passport-expiry',
        next: '/../intro',
      /*  nextAlt: '../overseas'*/
        nextAlt: '/../prototype_161212/overseas/british-citizen'
    },
    '/british-citizen': {
        fields: ['british-citizen'],
        backLink: './uncancelled',
        next: '/about-your-passport' /* if Yes is selected */
    },
    '/about-your-passport': {
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: './',
        next: '/have-to-send'
    },
    '/have-to-send': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    }
};
