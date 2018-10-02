module.exports = {
  '/': {
    controller: require('../../../controllers/check-query-string'),
    fields: ['reference'],
    next: '/track-email'
  },
  '/track-email': {
    controller: require('../../../controllers/login'),
    fields: ['age-day', 'age-month', 'age-year'],
    next: '/need-csig',
    backLink: './',
    forks: [{
      target: '/paper-application',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'paper-csig';
      }
    }, {
      target: '/send-docs',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'send-docs';
      }
    }, {
      target: '/csig-completed',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'csig-completed';
      }
    }, {
      target: '/application-submitted',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'application-submitted';
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
  },
  '/application-submitted': {
    next: '../csig/'
  },
  '/paper-application-select': {
    fields: ['confirm-csig-paper'],
    next: '/paper-application-confirmed',
    forks: [{
      target: '/paper-application',
      condition: {
        field: 'confirm-csig-paper',
        value: false
      }
    }]
  },
  '/paper-application': {
    next: '/../user-contact',
  },
  '/paper-application-confirmed': {
    next: '../csig/'
  }
};