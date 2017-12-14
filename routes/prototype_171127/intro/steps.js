module.exports = {
    '/': {
        backLink: '../filter-common',
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
      fields: ['photo-code-photo'],
      backLink: './choose-photo-method',
      next: '/retrieving'
    },
    '/retrieving': {
      backLink: './get-photo-code',
    },
    '/fetch-result': {
      controller: require('../../../controllers/fetch-result')
    },
    '/error': {
        backLink: './get-photo-code',
    }
};
