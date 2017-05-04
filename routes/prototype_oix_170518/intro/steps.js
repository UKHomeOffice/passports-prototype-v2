module.exports = {
    '/': {
        backLink: '/../prototype_oix_170518/filter/uncancelled',
        next: '/what-you-need'
    },
    '/what-you-need': {
      backLink: './',
      next: '/photo-retrieved'
    },
    '/you-need-a-photo': {
      backLink: './what-you-need-overseas',
      next: '/choose-photo-method'
    },
    '/choose-photo-method': {
      fields: ['choose-photo'],
      next: '/../upload'
    },
    '/photo-retrieved': {
      next: '/../uploadphoto'
    }
};
