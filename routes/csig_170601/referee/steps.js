module.exports = {
    '/': {
        fields: ['pex-reference', 'phoneno'],
        next: '/csig-info'
    },
    '/csig-info': {
        next: '/csig-identity-check'
    },
    '/csig-identity-check': {
        fields: ['name', 'lastname','passport-number','expiry-month','expiry-year','age-day','age-month','age-year','national-insurance'],
        back:'csig-info',
        next: '/track'
    }
};
