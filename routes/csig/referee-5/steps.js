module.exports = {
    '/': {
        next: '/csig-intro'
    },
    '/csig-intro': {
        next: '/applicant-info'
    },
    '/applicant-info': {
        backLink: './',
        fields: ['pex-number','age-day','age-month','age-year'],
        next: '/../referee/'
    },
    '/i-dont-meet-the-criteria': {
      backLink: './',
    },
};
