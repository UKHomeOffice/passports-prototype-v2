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
      next: '/tracking-waiting',
      forks: [{
        target: '/tracking-waiting-renominate',
        condition: function(req, res) {
          return req.session['hmpo-wizard-common']['renominate'] == true;
        }
      }],
    },
    '/tracking-waiting': {
        next: '/track'
    },
    '/email-confirmation': {

    }
};
