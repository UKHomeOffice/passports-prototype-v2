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
      next: '/tracking-waiting'
    },
    '/tracking-waiting': {
        next: '/track'
    },
    '/tracking-waiting-renominate': {
        next: '/track'
    },
    '/email-confirmation': {

    }
};
