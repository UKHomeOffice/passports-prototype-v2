module.exports = {
    '/': {
        backLink: '../user/need-csig',
        next: '/give-csig-details',
        controller: require('../../../controllers/csig-email-pre')
    },
    '/give-csig-details': {
      fields: ['csig-email', 'csig-name', 'contact-csig'],
      controller: require('../../../controllers/csig-email'),
      backLink: './',
      next: '/email-sent'
    },
    '/email-sent': {
      backLink: '/give-csig-details',
      next: '/tracking-waiting'
    },
    '/tracking-waiting': {
        next: '/track'
    },
    '/tracking-waiting-renominate': {
        next: '/track'
    },
    '/tracking-waiting-renominate-anytime': {
        next: '/track'
    },
    '/email-confirmation': {

    }
};
