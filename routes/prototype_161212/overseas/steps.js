module.exports = {
    '/':{
      fields: ['issuing-authority', 'age-year', 'age-month'],
      backLink: '../filter-common/dob',
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
        next: '/have-to-send' /* if Yes is selected */
    },
    '/have-to-send': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    }
};
