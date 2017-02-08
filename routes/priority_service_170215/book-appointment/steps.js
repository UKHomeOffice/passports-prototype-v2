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
    '/london-week-2-selected': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
    '/peterborough-week-1': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
  '/peterborough-week-2': {
    fields: ['passport-damaged'],
      backLink: './',
      next: '/passport-damaged' /* if No is selected */
    },
    '/newport-week-1': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
  '/newport-week-2': {
    fields: ['passport-damaged'],
      backLink: './',
      next: '/passport-damaged' /* if No is selected */
    },
    '/london-week-1': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/passport-damaged' /* if No is selected */
  },
  '/london-week-2': {
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
