module.exports = {
    '/': {
        backLink: '/../prototype_161124/filter/uncancelled',
        next: '/what-you-need'
    },
    '/what-you-need': {
      backLink: './',
      next: '/choose-photo-method'
    },
    '/what-you-need-overseas': {
      backLink: './'
    },
    '/you-need-a-photo': {
      backLink: './what-you-need',
      next: '/../photoguide-short'
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
      backLink: './what-you-need',
      next: '/../upload'
    }
};
