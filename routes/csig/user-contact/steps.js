module.exports = {
    '/': {
        backLink: '../user/need-csig',
        // fields: ['contact-csig'],
        next: '/give-csig-details'
    },
    '/give-csig-details': {
      fields: ['csig-email', 'csig-name', 'contact-csig'],
      backLink: './',
        next: '/tracking-waiting'
    },
    '/tracking-waiting': {
        next: '/track'
    },
    '/email-confirmation': {

    }
};
