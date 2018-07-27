module.exports = {
    '/': {
      controller: require('../../../controllers/check-tracking-status'),
      fields: ['reference'],
        next: '/track-email',
    },
    '/track-email': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/need-csig',
        backLink: './',
        forks: [{
          target: '/send-docs',
          condition: function(req, res) {
            return req.session['hmpo-wizard-common']['tracking-status'] == 'send-docs';
          }
        }],
    },
    '/waiting-for-old-pass': {
        next: '/track'
    },
    '/need-csig': {
        fields: ['renominate'],
        next: '/../user-contact'
    },
    '/need-csig-complete': {
        fields: ['renominate'],
        next: '/../user-contact'
    },
    '/send-book': {
      next: '../csig/'
    },
    '/send-docs': {
      next: '../csig/'
    }
};
