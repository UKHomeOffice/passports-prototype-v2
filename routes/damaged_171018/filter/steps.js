module.exports = {
    '/': {
      fields: ['expiry-year', 'expiry-month'],
      backLink: '../filter-common/dob',
      next: '/uncancelled'
    },
    '/uncancelled': {
        controller: require('../../../controllers/go-overseas'),
        fields: ['uncancelled'],
        backLink: './',
        next: '/../intro',
        nextAlt: '../overseas'
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './uncancelled',
        next: '/../intro' /* if No is selected */
    }

};
