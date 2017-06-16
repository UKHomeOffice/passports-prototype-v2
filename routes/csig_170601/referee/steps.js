module.exports = {
    '/': {
        fields: ['pex-reference', 'phoneno'],
        next: '/csig-info'
    },
    '/csig-info': {
        next: '/track'
    }
};
