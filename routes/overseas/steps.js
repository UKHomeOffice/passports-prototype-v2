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
      next: '/what-you-need'
    },
    '/before-you-continue': {
      backLink: './prove-your-identity',
      next: '/what-you-need'
    },
    '/what-you-need': {
      backLink: './before-you-continue',
      next: '/you-need-a-photo'
    },
    '/you-need-a-photo': {
      backLink: './what-you-need',
      next: '/choose-photo-method'
    },
    '/choose-photo-method': {
      fields: ['choose-photo'],
      backLink: './you-need-a-photo',
      next: '/../uploadphoto'
    }
};
