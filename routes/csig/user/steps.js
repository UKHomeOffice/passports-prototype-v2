module.exports = {
  '/': {
    controller: require('../../../controllers/check-query-string'),
    fields: ['reference'],
    next: '/track-email'
  },
  '/track-email': {
    fields: ['age-day', 'age-month', 'age-year'],
    next: '/need-csig',
    backLink: './',
    forks: [{
      target: '/send-docs',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'send-docs';
      }
    }, {
      target: '/csig-completed',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'csig-completed';
      }
    }],
  },
  '/waiting-for-old-pass': {
    next: '/track'
  },
  '/need-csig': {
    fields: ['renominate'],
    next: '/../user-contact',
    forks: [{
      condition: function (req, res) {
        // setter for Document page to redirect back to Csig
        req.sessionModel.set('routeFromCsig', true)
      }
    }]
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
  },
  '/csig-completed': {
    next: '../csig/'
  }
};