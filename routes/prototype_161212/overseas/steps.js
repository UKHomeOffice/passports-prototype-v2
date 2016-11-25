module.exports = {
    '/':{
      controller: require('../../../controllers/application-country'),
      fields: ['apply-uk', 'application-country'],
      backLink: '/../prototype_161212/startpage-overseas',
      next: '/what-do-you-want-to-do' /* if Yes is selected */
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
        backLink: './passport-damaged',
        next: '/../intro',
        nextAlt: '../overseas'
    },
    '/british-citizen': {
        fields: ['british-citizen'],
        backLink: '/../prototype_161212/filter/uncancelled',
        next: '/about-your-passport' /* if Yes is selected */
    },
    '/about-your-passport': {
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: './',
        next: '/prove-your-identity'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    }
};
