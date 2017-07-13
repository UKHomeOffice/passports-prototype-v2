module.exports = {
    '/': {
        next: '/csig-info'
    },
    '/csig-info': {
      fields: ['passport-number', 'phoneno'],
        next: '/csig-identity-check'
    },
    '/csig-identity-check': {
        fields: ['name', 'lastname','expiry-month','expiry-year','age-day','age-month','age-year','national-insurance'],
        back:'csig-info',
        next: '/confirm-applicant'
    },
    '/confirm-applicant': {
        fields: ['applicant-check'],
        next: '/csig-details-work'
    },
    '/csig-details': {
        fields: ['title'],
        back:'confirm-applicant',
        next: '/csig-details-work'
    },
    '/csig-details-work': {
        back:'confirm-applicant',
        next: '/declaration'
    },
    '/declaration': {
        back:'csig-details-work',
        next: '/confirmation'
    },
    '/confirmation': {
        back:'declaration',
        next: '/confirmation'
    }
};
