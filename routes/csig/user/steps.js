module.exports = {
    '/': {
      controller: require('../../../controllers/tracking'),
      fields: ['reference'],
        next: '/track-postcode',
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old-pass',
        backLink: 'track'
    },
    '/track-postcode': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/need-csig',
        backLink: '/'
    },
    '/waiting-for-old-pass': {
        next: '/track'
    },
    '/need-csig': {
        fields: ['renominate'],
        next: '/../user-contact'
    },
    '/need-csig-complete': {
        fields: ['renominate'],
        next: '/../user-contact'
    },
    '/send-book': {
      next: '../csig/'
    }
};
