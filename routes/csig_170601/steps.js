module.exports = {
    '/': {
        fields: ['pex-reference'],
        next: '/track'
    },
    '/track-a-application': {
        next: '/track'
    },
    '/track': {
      controller: require('../../controllers/tracking'),
      fields: ['reference'],
        next: '/track-postcode'
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old-pass',
        backLink: 'track'
    },
    '/track-postcode': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old-pass',
        backLink: 'track'
    },
    '/waiting-for-old-pass': {
        next: '/track'
    }
};
