module.exports = {
    '/': {
        fields: ['country'],
        backLink: '/../filter/apply-from-uk',
        next: '/british-citizen'
    },
    '/british-citizen': {
      fields: ['british-citizen'],
        backLink: './',
        next: '/about-your-passport' /* if Yes is selected */
    },
    '/about-your-passport': {
        fields: ['issuing-authority', 'age-year', 'age-month'],
        backLink: './british-citizen',
        next: '/prove-your-identity'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro'
    }
};
