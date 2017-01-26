module.exports = {
    '/': {
      fields: ['expiry-year', 'expiry-month'],
      backLink: '../intro/what-you-need',
      next: '/passport-damaged'
    },
    '/book-time': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/book-appointments-2': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/book-appointments-3': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/confirmation-scenario-1': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/confirmation-scenario-2': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
      '/book-time_peterborough_21_jan': {
        fields: ['passport-damaged'],
          backLink: './',
          next: '/passport-damaged' /* if No is selected */
    },
    '/book-time_newport_25_jan': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/book-time_newport_27_jan': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
  '/book-time_newport_28_jan': {
    fields: ['passport-damaged'],
      backLink: './',
      next: '/passport-damaged' /* if No is selected */
  },
    '/book-time_newport_30_jan': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
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
        next: '/../intro',
        nextAlt: '../overseas'
    }
};
