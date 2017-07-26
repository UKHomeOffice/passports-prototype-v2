module.exports = {
    '/': {
        next: '/applicant-info'
    },
    '/applicant-info': {
        fields: ['pex-number','age-day','age-month','age-year'],
        next: '/../referee/'
    }
};
