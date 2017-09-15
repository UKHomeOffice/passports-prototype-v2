module.exports = {
    '/': {
        next: '/applicant-info'
    },
    '/applicant-info': {
        backLink: './',
        fields: ['pex-number','age-day','age-month','age-year'],
        next: '/../referee/'
    }
};
