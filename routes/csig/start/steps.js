module.exports = {
    '/': {
        next: '/applicant-info'
    },
    '/applicant-info': {
        backLink: './',
        fields: ['pex-number','age-day','age-month','age-year'],
        //next: '/declaration',
        controller: require('../../../controllers/csig-reference')
    },
    '/declaration': {
      backLink: './applicant-info',
      next: '/../referee/'
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
