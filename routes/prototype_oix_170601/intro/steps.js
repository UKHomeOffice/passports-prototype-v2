module.exports = {
    '/': {
        backLink: '/../prototype_oix_170601/filter/uncancelled',
        next: '/what-you-need'
    },
    '/what-you-need': {
      backLink: './',
      next: '/photo-retrieved'
    },
    '/you-need-a-photo': {
      backLink: './what-you-need',
      next: '/choose-photo-method'
    },
    '/choose-photo-method': {
      fields: ['choose-photo'],
      next: '/../upload'
    },
    '/photo-retrieved': {
      next: '/../uploadphoto'
    },
    '/get-photo-code': {
      controller: require('../../../controllers/photo-code-photo'),
      fields: ['photo-code-photo'],
      backLink: './choose-photo-method',
      next: '/error'
    },
    '/retrieving': {
      backLink: './get-photo-code',
      next: '/photo-retrieved'
    },
    '/error': {
        backLink: './get-photo-code',
    }
};
