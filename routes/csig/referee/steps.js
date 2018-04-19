module.exports = {
    '/': {
        fields: ['age-day','age-month','age-year','passport-number','expiry-day','expiry-month','expiry-year'],
        backLink: '../referee-5/applicant-info',
        next: '/name-address',
        controller: require('../../../controllers/csig-email')
    },
    '/name-address': {
        fields: ['name', 'middlename', 'lastname', 'address-postcode'],
        backLink: './',
        next: '/home-address-select'
    },
    '/home-address-select':{
        backLink: './name-address',
        next: '/csig-identity-auth',
        forks: [{
          target: '/csig-identity-auth-fail',
          condition: function(req, res) {
            return req.session['hmpo-wizard-common']['address-postcode'].startsWith('NG1');
          }
        }],
    },
    '/home-address-manual':{
        backLink: './home-address-select'
    },
    '/csig-summary': {
        next: '/confirm-applicant'
    },
    '/csig-identity-auth': {
        next: '/csig-identity-confirmed',
    },
    '/csig-identity-auth-fail': {
        next: '/csig-identity-confirmed',
    },
    '/csig-identity-fail': {
    },
    '/csig-identity-confirmed': {
        next: '/confirm-applicant'
    },
    '/confirm-applicant': {
      fields: ['applicant-check', 'applicant-check-friend', 'applicant-check-address', 'knowntime'],
      next: '/confirm-applicant-address',
      controller: require('../../../controllers/check-csig')
    },
    '/applicant-photo-fail': {
      backLink: './confirm-applicant',
      next: '/confirm-applicant-address'
    },
    '/confirm-applicant-address': {
        fields: ['applicant-check-home-address'],
        next: '/csig-details-work'
    },
    '/csig-details': {
        fields: ['title'],
        backLink: 'confirm-applicant',
        next: '/csig-details-work'
    },
    '/csig-details-work': {
        fields: ['profession', 'retired' ],
        backLink:'confirm-applicant-address',
        next: '/csig-details-contact'
    },
    '/csig-details-contact': {
        fields: ['phone-number', 'email-address'],
        next: '/confirmation'
    },
    '/csig-details-work-address': {
        backLink: 'csig-details-work',
        next: '/csig-details-contact'
    },
    '/confirmation': {

    },
    '/exceptions': {
      backLink: 'confirm-applicant'
    },
    '/exceptions-not-applicant': {

    },
    '/applicant-summary': {
      backLink: 'confirm-applicant'
    },
    '/applicant-summary-name-address': {
      backLink: 'confirm-applicant-address'
    },
    '/applicant-not-applicant': {
      backLink: 'confirm-applicant'
    },
    '/terms-and-conditions': {

    },
};
