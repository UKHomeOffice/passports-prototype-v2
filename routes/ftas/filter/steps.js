module.exports = {
    '/': {
      fields: ['expiry-year', 'expiry-month', 'expiry-day'],
      backLink: '../filter-common/dob',
      next: '/uncancelled'
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/uncancelled' /* if No is selected */
    },
    '/uncancelled': {
        backLink: './',
        next: '/../intro'
    },
    '/dual-national': {
      backLink: './uncancelled',
      fields: ['uncancelled-check'],
      next: '/../intro',
      forks: [{
          target: '/passports-different-name',
          condition: {
              field: 'uncancelled-check',
              value: false
          }
      }],
    },
    '/passports-different-name': {

    }
};
