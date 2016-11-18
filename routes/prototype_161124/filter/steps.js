module.exports = {
    '/': {
        fields: ['what-to-do'],
        backLink: '/../prototype_161124/startpage',
        next: '/dob'
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
        backLink: './',
        next: '/apply-from-uk' /* if Yes is selected */
    },
    '/apply-from-uk': {
        controller: require('../../../controllers/application-country'),
        fields: ['apply-uk', 'application-country'],
        backLink: './dob',
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
    }
};
