module.exports = {
    '/': {
        fields: ['pex-reference', 'phoneno'],
        next: '/csig-info'
    },
    '/csig-info': {
        next: '/csig-identity-check'
    },
    '/csig-identity-check': {
        back:'csig-info',
        next: '/track'
    }
};
