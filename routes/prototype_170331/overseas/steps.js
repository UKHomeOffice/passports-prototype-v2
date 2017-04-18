module.exports = {
    '/':{
      fields: ['issuing-authority', 'issue-year', 'issue-month'],
      backLink: '/../prototype_170123/filter-common/dob-overseas',
      next: '/passport-damaged'
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './',
        next: '/uncancelled' /* if No is selected */
    },
    '/uncancelled': {
        fields: ['uncancelled'],
        backLink: './passport-damaged',
        next: '/british-citizen'
    },
    '/british-citizen': {
        fields: ['british-citizen'],
        backLink: './uncancelled',
        next: '/try-service'
    },
    '/have-to-send': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    },
    '/try-service': {
        fields: ['try-service'],
        backLink: './british-citizen',
        /*next: '/give-contact-details' to include if we add the UR pages */
        next: '/../intro/before-you-continue-overseas'

    },
    '/give-contact-details': {
        fields: ['name','lastname','email','application-country-code', 'mobile', 'help'],
        backLink: './try-service',
        next: '/../intro/before-you-continue-overseas' /* if yes is selected */
    }
};
