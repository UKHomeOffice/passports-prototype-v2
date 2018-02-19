module.exports = {
    '/': {
        next: '/declaration'
    },
    '/declaration': {
      backLink: './',
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
