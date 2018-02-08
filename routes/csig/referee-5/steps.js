module.exports = {
    '/': {
        next: '/csig-intro'
    },
    '/csig-intro': {
        backLink: './',
        next: '/applicant-info'
    },
    '/applicant-info': {
        backLink: './csig-intro',
        fields: ['pex-number','age-day','age-month','age-year'],
        next: '/../referee/'
    },
    '/i-dont-meet-the-criteria': {
      backLink: './',
    },
};
