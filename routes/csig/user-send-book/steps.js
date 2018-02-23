module.exports = {
    '/': {
      controller: require('../../../controllers/csig-email'),
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
        next: '/send-book',
        backLink: '/'
    },
    '/send-book': {
      backLink: 'track-postcode',
      next: '../csig/'
    }
};
