module.exports = {
    '/': {
        fields: ['passport-number','expiry-month','expiry-year'],
        back: '/',
        next: '/csig-identity-check'
    },
    '/csig-identity-check': {
        fields: ['name', 'lastname','age-day','age-month','age-year','national-insurance'],
        back: 'csig-info',
        next: '/csig-identity-auth'
    },
    '/csig-summary': {
        next: '/confirm-applicant'
    },
    '/csig-identity-auth': {
        next: '/confirm-applicant'
    },
    '/confirm-applicant': {
        fields: ['applicant-check', 'applicant-check-friend', 'applicant-check-address', 'knowntime'],
        next: '/csig-details-work'
    },
    '/csig-details': {
        fields: ['title'],
        back: 'confirm-applicant',
        next: '/csig-details-work'
    },
    '/csig-details-work': {
        fields: ['profession', 'retired' ],
        back:'confirm-applicant',
        next: '/csig-details-home-address'
    },
    '/csig-details-contact': {
        fields: ['phone-number', 'email-address'],
        next: '/declaration'
    },
    '/csig-details-home-address': {
        back: '/csig-details-work',
        next: '/declaration'
    },
    '/csig-details-work-address': {
        back: '/csig-details-work',
        next: '/declaration'
    },
    '/declaration': {
        back:'csig-details-work',
        next: '/confirmation'
    },
    '/confirmation': {
        next: '/confirmation'
    },
    '/exceptions': {

    },

};
