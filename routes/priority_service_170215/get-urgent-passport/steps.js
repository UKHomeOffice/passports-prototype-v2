module.exports = {
    '/': {
      fields: ['expiry-year', 'expiry-month'],
      backLink: '../filter-common/dob',
      next: '/passport-damaged'
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/filter-common' /* if No is selected */
    },
    '/premium-offline': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/filter-common' /* if No is selected */
    },
    '/premium-online': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/filter-common' /* if No is selected */
    },
    '/fast-track': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/filter-common' /* if No is selected */
    },
};
