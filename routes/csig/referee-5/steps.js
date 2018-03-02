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
        next: '/../referee/',
        controller: require('../../../controllers/csig-reference')
    },
    '/csig-expired': {
      backLink: './applicant-info',
    },
    '/csig-invalid': {
      backLink: './applicant-info',
    },
    '/i-dont-meet-the-criteria': {
      backLink: './',
    },
    '/i-need-these-details': {
      backLink: './',
    },
};
