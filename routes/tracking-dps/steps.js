module.exports = {
    '/': {
        controller: require('../../controllers/check-tracking-status'),
        fields: ['reference'],
        next: '/track-email'
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/application-recieved?status=submitted',
        backLink: './'
    },
    '/application-recieved': {
        controller: require('../../controllers/check-tracking-status')
    },
    '/photo-rejected': {},
    '/photo-rejected-no-time': {},
    '/you-need-csig': {},
    '/new-photo-arrived': {},
    '/application-approved': {},
    '/we-called-you': {},
    '/rpd':{}
};