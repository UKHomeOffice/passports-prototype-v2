module.exports = {
    '/': {
        fields: ['british-citizen'],
        backLink: '/../prototype_161110/filter/uncancelled',
        next: '/about-your-passport' /* if Yes is selected */
    },
    '/about-your-passport': {
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: './',
        next: '/prove-your-identity'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro/what-you-need-overseas'
    }
};
