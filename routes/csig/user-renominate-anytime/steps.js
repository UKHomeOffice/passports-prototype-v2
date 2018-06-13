module.exports = {
    '/': {
      controller: require('../../../controllers/csig-email'),
      fields: ['reference'],
        next: '/track-email',
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/renominate',
        backLink: '/'
    },
    '/renominate': {
      fields: ['renominate'],
      backLink: 'track-postcode',
      next: '/../user-contact/',
      controller: require('../../../controllers/csig-email-pre'),
    },
    '/renominate-complete': {
      backLink: 'track-postcode',
    }
};
