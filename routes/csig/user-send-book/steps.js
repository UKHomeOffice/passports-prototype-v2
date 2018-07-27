module.exports = {
    '/': {
      controller: require('../../../controllers/csig-email'),
      fields: ['reference'],
        next: '/track-email',
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/send-book',
        backLink: 'track'
    },
    '/send-book': {
      backLink: 'track-postcode',
      next: '../csig/'
    },
    '/csig-complete': {

    },
    '/fta-docs': {
      backLink: 'csig-complete'
    }
};
