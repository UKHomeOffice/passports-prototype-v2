module.exports = {
    '/': {
        backLink: '/../overseas/prove-your-identity',
        next: '/what-you-need'
    },
    '/what-you-need': {
      backLink: './',
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
