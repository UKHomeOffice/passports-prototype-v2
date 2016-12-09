module.exports = {
    '/': {
        backLink: '/../prototype_161212/filter/uncancelled',
        next: '/what-you-need'
    },
    '/what-you-need': {
      backLink: './',
      next: '/you-need-a-photo'
    },
    '/what-you-need-overseas': {
      backLink: '/../prototype_161212/overseas/try-service',
      next: '/choose-photo-method-overseas'
    },
    '/you-need-a-photo': {
      backLink: './what-you-need',
      next: '/choose-photo-method'
    },
    '/you-need-a-photo-v2': {
      backLink: './what-you-need',
      next: '/choose-photo-method'
    },
    '/you-need-a-photo-v3': {
      backLink: './what-you-need',
      next: '/choose-photo-method'
    },
    '/choose-photo-method': {
      fields: ['choose-photo'],
      next: '/../upload'
    },
    '/choose-photo-method-overseas': {
      fields: ['choose-photo-overseas'],
      next: '/../upload'
    }
};
