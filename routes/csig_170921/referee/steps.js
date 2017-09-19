module.exports = {
    '/': {
        fields: ['passport-number','expiry-month','expiry-year'],
        backLink: '../referee-5/applicant-info',
        next: '/csig-identity-check'
    },
    '/csig-identity-check': {
        fields: ['name', 'lastname','age-day','age-month','age-year','national-insurance'],
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
};
