module.exports = {
    '/': {
        fields: ['age-day','age-month','age-year','passport-number','expiry-day','expiry-month','expiry-year'],
        backLink: '../referee-5/applicant-info',
        next: '/name-address',
        controller: require('../../../controllers/csig-email')
    },
    '/name-address': {
        fields: ['name', 'lastname', 'address-postcode'],
        backLink: './',
        next: '/home-address-select'
    },
    '/home-address-postcode':{
        backLink: './name-address'
    },
    '/home-address-select':{
        backLink: './name-address',
        next: '/csig-identity-auth'
    },
    '/home-address-manual':{
        backLink: './home-address-select'
    },
    '/home-address-filled':{
        fields:['address1', 'address2', 'town', 'postcode'],
        backLink: './home-address-select',
        next: '/csig-identity-auth',
        forks: [{
          target: '/csig-bank-check',
          condition: function(req, res) {
            return req.session['hmpo-wizard-52']['identity-options'] == false;
          }
        }]
    },
    '/csig-bank-check': {
        next: '/csig-identity-auth'
    },
    '/csig-address-check': {
        next: '/csig-identity-auth',
        forks: [{
          target: '/csig-bank-check',
          condition: function(req, res) {
            return req.session['hmpo-wizard-52']['identity-options'] == false;
          }
        }],
    },
    '/csig-summary': {
        next: '/confirm-applicant'
    },
    '/csig-identity-auth': {
        next: '/csig-identity-confirmed'
    },
    '/csig-identity-confirmed': {
        next: '/confirm-applicant'
    },
    '/confirm-applicant': {
        fields: ['applicant-check', 'applicant-check-friend', 'applicant-check-address', 'knowntime'],
        next: '/confirm-applicant-address',
        forks: [{
          target: '/applicant-summary',
          condition: function(req, res) {
            return req.session['hmpo-wizard-50']['knowntime'] < 2;
          }
        }]
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
        backLink:'confirm-applicant',
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
    // '/declaration': {
    //     backLink:'csig-details-work',
    //     next: '/confirmation'
    // },
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
