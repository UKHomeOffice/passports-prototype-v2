module.exports = {
    '/': {
        fields: ['name', 'lastname','age-day','age-month','age-year','passport-number','expiry-day','expiry-month','expiry-year'],
        backLink: '../referee-5/applicant-info',
        next: '/csig-address-check'
    },
    '/csig-address-check': {
        backLink: './',
        next: '/csig-identity-auth'
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
        next: '/confirm-applicant-address'
    },
    '/confirm-applicant-address': {
        fields: ['applicant-check-home-address', 'applicant-check-names'],
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
        next: '/csig-details-home-address'
    },
    '/csig-details-contact': {
        fields: ['phone-number', 'email-address'],
        next: '/declaration'
    },
    '/csig-details-home-address': {
        backLink: 'csig-details-work',
        next: '/csig-details-contact'
    },
    '/csig-details-work-address': {
        backLink: 'csig-details-work',
        next: '/csig-details-contact'
    },
    '/declaration': {
        backLink:'csig-details-work',
        next: '/confirmation'
    },
    '/confirmation': {

    },
    '/exceptions': {

    },
    '/exceptions-not-applicant': {

    },
    '/applicant-summary': {

    },
    '/applicant-not-applicant': {
      backLink: 'confirm-applicant'
    }
};
