module.exports = {
    '/': {
        controller: require('../../controllers/check-tracking-status'),
        fields: ['reference'],
        next: '/track-email'
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old',
        backLink: './'
    },
    '/waiting-for-old': {},
    '/application-approved': {},
    '/recieved-documents': {}


};