module.exports = {
    '/': {
      fields: ['expiry-year', 'expiry-month'],
      backLink: '../filter-common/dob',
      next: '/passport-damaged'
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/uncancelled' /* if No is selected */
    },
    '/uncancelled': {
        controller: require('../../../controllers/go-overseas'),
        fields: ['uncancelled'],
        backLink: './passport-damaged',
        next: '/collect',
        nextAlt: '../overseas'
    },
    '/collect': {
      fields: ['collect'],
        backLink: './',
        next: '/second', /* if No is selected */
        nextAlt: '/not-eligible'
    },
    '/second': {
      fields: ['second-passport'],
        backLink: './',
        next: '/../priority-service-intro', /* if No is selected */
        nextAlt: '/not-eligible'
    }
};
