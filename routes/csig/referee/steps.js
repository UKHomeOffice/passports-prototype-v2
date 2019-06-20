module.exports = {
    '/': {
        fields: ['age-day','age-month','age-year','passport-number','expiry-day','expiry-month','expiry-year'],
        backLink: '../referee-5/applicant-info',
        next: '/your-details',
        controller: require('../../../controllers/csig-email')
    },
    '/your-details': {
        fields: ['name', 'middlename', 'lastname'],
        backLink: './',
        next: '/home-address'
    },
    '/home-address': {
      fields: ['address-postcode'],
      backLink: './your-details',
      next: '/home-address-select'
  },
    '/home-address-select':{
        backLink: './home-address',
        next: '/csig-identity-auth',
        fields: ['address-type'],
        forks: [{
          target: '/csig-identity-auth-fail',
          condition: function(req, res) {
            return req.session['hmpo-wizard-common']['address-postcode'].startsWith('NG1');
          }
        }],
    },
    '/home-address-manual':{
        fields: ['address-type'],
        next: '/csig-identity-auth',
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
        next: '/confirm-applicant',
        forks: [{
          target: '/confirm-applicant-relationship',
          condition: function(req, res) {
            return req.session['hmpo-wizard-common']['csig-child'] == true;
          }
        }],
    },
    '/confirm-applicant': {
        fields: ['applicant-check', 'applicant-check-friend', 'applicant-check-address', 'knowntime', 'relationship'],
        next: '/confirm-applicant-address',
        forks: [{
          target: '/applicant-photo-fail',
          condition: function (req, res) {
            return req.session['hmpo-wizard-common']['applicant-check'] == "No"
          }
        }],
        controller: require('../../../controllers/check-csig')
    },
    '/confirm-applicant-relationship': {
        fields: ['child-relationship'],
        next: '/confirm-applicant-child-eligibility'
    },
    '/confirm-applicant-child-eligibility': {
        fields:  ['applicant-check-friend', 'applicant-check-address', 'knowntime', 'relationship'],
        next: '/confirm-applicant-child',
        controller: require('../../../controllers/check-csig')
    },
    '/confirm-applicant-child': {
        fields: ['applicant-check-child', 'child-place-of-birth'],
        next: '/confirm-applicant-parents',
        forks: [{
            target: '/applicant-photo-fail',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['applicant-check-child'] == "No"
            }
        }]
    },
    '/confirm-applicant-parents': {
        fields: ['child-mother', 'child-father'],
        next: '/confirm-applicant-address'
    },
    '/confirm-applicant-parents-missing': {
        fields: ['child-mother'],
        next: '/confirm-applicant-address'
    },
    '/applicant-photo-fail': {
      next: '/confirm-applicant-address',
      forks: [{
        target: '/confirm-applicant-parents',
        condition: function(req, res) {
          return req.session['hmpo-wizard-common']['csig-child'] == true;
        }
      }],
    },
    '/confirm-applicant-address': {
        fields: ['applicant-check-home-address'],
        next: '/csig-details-work'
    },
    '/csig-details-work': {
        fields: ['profession', 'retired' ],
        backLink: 'confirm-applicant-address',
        next: '/csig-details-contact',
        forks: [{
          target: '/csig-details-home-address',
          condition: function(req, res) {
            return req.session['hmpo-wizard-common']['address-type'] == 'manual';
          }
        }],
    },
    '/csig-details-work-address': {
        backLink: 'csig-details-work',
        next: '/csig-details-contact'
    },
    '/csig-details-home-address': {
        backLink: 'confirm-applicant-address',
        next: '/csig-details-contact',
    },
    '/csig-details-contact': {
        fields: ['phone-number', 'email-address'],
        next: '/confirmation'
    },
    '/csig-details': {
        fields: ['title'],
        backLink: 'confirm-applicant',
        next: '/csig-details-work',
    },
    '/confirmation': {

    },
    '/exceptions': {
  
    },
    '/exceptions-not-applicant': {

    },
    '/exceptions-under-18': {

    },
    '/applicant-summary': {

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
