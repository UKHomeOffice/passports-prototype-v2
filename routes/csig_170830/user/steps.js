module.exports = {
    '/': {
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
        backLink: '/'
    },
    '/waiting-for-old-pass': {
        next: '/track'
    },
    '/need-csig': {
        fields: ['contact-csig'],
        next: '/give-csig-details'
    },
    '/give-csig-details': {
      backLink: 'need-csig',
        next: '/tracking-waiting'
    },
    '/tracking-waiting': {
        next: '/track'
    }
};
