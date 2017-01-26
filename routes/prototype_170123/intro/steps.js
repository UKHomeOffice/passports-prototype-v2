module.exports = {
    '/': {
        backLink: '/../prototype_170123/filter/uncancelled',
        next: '/what-you-need'
    },
    '/before-you-continue-overseas': {
        backLink: '/../prototype_170123/overseas/give-contact-details',
        next: '/what-you-need-overseas'
    },
    '/what-you-need': {
      backLink: './',
      next: '/you-need-a-photo'
    },
    '/what-you-need-overseas': {
      backLink: './before-you-continue-overseas',
      next: '/you-need-a-photo'
    },
    '/you-need-a-photo': {
      backLink: './what-you-need-overseas',
      next: '/choose-photo-method'
    },
    '/you-need-a-photo-overseas': {
      backLink: './what-you-need-overseas',
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
