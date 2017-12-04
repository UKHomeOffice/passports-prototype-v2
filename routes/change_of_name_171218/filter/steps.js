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
        next: '/../intro',
        forks: [{
            target: '/dual-national',
            condition: {
                field: 'uncancelled',
                value: true
            }
        }],
        nextAlt: '../overseas'
    },
    '/dual-national': {
      backLink: './uncancelled',
      controller: require('../../../controllers/dual-national')
    }
};
