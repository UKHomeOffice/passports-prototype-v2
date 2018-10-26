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
        backLink: './',
        forks: [{
            target: '/send-us-your-documents',
            condition: function (req, res) {
              return req.session['hmpo-wizard-common']['tracking-status'] == 'send-us-your-docs';
            }
        }]
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