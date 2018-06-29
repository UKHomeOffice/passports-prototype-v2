module.exports = {
    '/': {
      controller: require('../../../controllers/tracking'),
      fields: ['reference'],
        next: '/track-email',
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/../track',
        backLink: 'track'
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
