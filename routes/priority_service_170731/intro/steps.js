module.exports = {
    '/': {
        backLink: '/../priority_service_170731/filter/uncancelled',
        next: '/what-you-need'
    },
    '/before-you-continue-overseas': {
        backLink: '/../priority_service_170731/overseas/uncancelled',
        next: '/what-you-need-overseas'
    },
    '/what-you-need': {
      backLink: './',
      next: '/you-need-a-photo'
    },
    '/what-you-need-overseas': {
      backLink: '/../priority_service_170731/overseas/try-service',
      next: '/you-need-a-photo-overseas'
    },
    '/you-need-a-photo': {
      backLink: '../book-appointment/confirmation-scenario-1',
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
