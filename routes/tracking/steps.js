module.exports = {
    '/': {
        controller: require('../../controllers/check-query-string'),
        fields: ['reference'],
        next: '/track-email'
    },
    '/track-email': {
        controller: require('../../controllers/login'),
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old',
        backLink: './'
    },
    '/waiting-for-old': {},
    '/send-us-your-documents': {},
    '/recieved-your-documents': {},
    '/photo-rejected': {},
    '/new-photo-arrived': {},
    '/you-need-csig': {},
    '/application-approved': {},
    '/your-passport-is-coming': {},
    '/sent-letter': {},
    '/rpd': {}
};