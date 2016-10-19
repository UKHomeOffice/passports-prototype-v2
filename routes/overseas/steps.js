module.exports = {
    '/': {
        backLink: './',
        next: '/british-citizen'
    },
    '/british-citizen': {
        backLink: './',
        next: '/about-your-passport'
    },
    '/about-your-passport': {
        backLink: './',
        next: '/prove-your-identity'
    },
    '/prove-your-identity': {
      backLink: './about-your-passport',
      next: '/../intro'
    }
};
