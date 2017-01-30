module.exports = {
    '/': {
      fields: ['expiry-year', 'expiry-month'],
      backLink: '../filter-common/dob',
      next: '/passport-damaged'
    },
    '/book-time': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/book-appointment-2': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
    },
    '/book-appointment-3': {
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
    '/book-appointment_peterborough_4_feb': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
  '/book-appointment_peterborough_10_feb': {
    fields: ['passport-damaged'],
      backLink: './',
      next: '/passport-damaged' /* if No is selected */
    },
    '/book-appointment_newport_4_feb': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
  '/book-appointment_newport_10_feb': {
    fields: ['passport-damaged'],
      backLink: './',
      next: '/passport-damaged' /* if No is selected */
    },
    '/book-appointment_london_4_feb': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
  '/book-appointment_london_10_feb': {
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
