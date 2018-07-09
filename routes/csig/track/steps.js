module.exports = {
    '/': {
      next: '/how-to'
    },
    '/how-to': {
        backLink: './',
        next: '/give-csig-details',
        controller: require('../../../controllers/csig-email-pre')
    },
    '/give-csig-details': {
      fields: ['csig-email', 'csig-name', 'csig-last-name', 'contact-csig'],
      backLink: './how-to',
      next: '/email-sent'
    },
    '/email-sent': {
      controller: require('../../../controllers/csig-email'),
      next: '/csig-pending'
    },
    '/tracking-waiting-renominate': {
        next: '/track'
    },
    '/tracking-waiting-renominate-anytime': {
        next: '/track'
    },
    '/csig-pending': {
      fields: ['renominate'],
      next: '/how-to'
    },
    '/csig-complete': {

    },
    '/csig-mvp': {

    },
    '/docs-fta': {
      backLink: './'
    }
};
