module.exports = {
  '/': {
    controller: require('../../../controllers/check-query-string'),
    fields: ['reference'],
    next: '/track-email',
  },
  '/track-email': {
    controller: require('../../../controllers/login'),
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
    fields: ['renominate'],
    backLink: 'track-postcode',
    next: '/../user-contact/',
    controller: require('../../../controllers/csig-email-pre'),
  }
};