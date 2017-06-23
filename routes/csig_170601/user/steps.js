module.exports = {
    '/': {
        fields: ['pex-reference'],
        next: '/track'
    },
    '/track-a-application': {
        next: '/track'
    },
    '/track': {
      controller: require('../../../controllers/tracking'),
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
        next: '/need-csig',
        backLink: 'track'
    },
    '/waiting-for-old-pass': {
        next: '/track'
    },
    '/need-csig': {
        next: '/track'
    },
    '/give-csig-details': {
      backLink: 'track',
        next: '/tracking-waiting'
    },
    '/tracking-waiting': {
        next: '/track'
    }
};
