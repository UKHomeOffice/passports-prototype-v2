module.exports = {
    '/': {
        next: '/csig-intro'
    },
    '/csig-intro': {
        backLink: './',
        next: '/declaration'
    },
    '/declaration': {
      backLink: './csig-intro',
      next: '/applicant-info'
    },
    '/applicant-info': {
        backLink: './declaration',
        fields: ['pex-number','age-day','age-month','age-year'],
        next: '/../referee/'
    },
    '/i-dont-meet-the-criteria': {
      backLink: './',
    },
};
