module.exports = {
  '/': {
    controller: require('../../../controllers/check-query-string'),
    fields: ['reference'],
    next: '/track-email'
  },
  '/track-email': {
    controller: require('../../../controllers/login'),
    fields: ['age-day', 'age-month', 'age-year'],
    next: '/confirm-your-identity',
    backLink: './',
    forks: [{
      target: '/application-in-queue',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'application-in-queue';
      }
    }, {
      target: '/send-book',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'send-passport';
      }
    }, {
      target: '/renominate',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['tracking-status'] == 'renominate';
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
  '/confirm-your-identity': {
    next: '/who-can',
    forks: [{
      target: '/select-overseas-method',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['group'] == 'overseas';
      }
    },{
      condition: function (req, res) {
        // setter for Document page to redirect back to Csig
        req.sessionModel.set('routeFromCsig', true)
      }
    }]
  },
  '/who-can': {
    next: '/how-to',
  },
  '/how-to': {
      backLink: './who-can',
      next: '/give-csig-details',
  },
  '/give-csig-details': {
      fields: ['csig-email', 'csig-email-confirm', 'csig-name', 'csig-last-name', 'contact-csig'],
      next: '/email-sent'
  },
  '/email-sent': {
      backLink: '/give-csig-details',
      controller: require('../../../controllers/csig-email'),
      next: '/tracking-waiting'
  },
  '/tracking-waiting': {
      next: '/../user-contact',
      forks: [{
          condition: function (req, res) {
              // setter for Document page to redirect back to Csig
              req.sessionModel.set('trackWaiting', true)
          }
      }]
  },
  '/renominate': {
    next: '/who-can'
  },
  '/renominate-anytime': {
    next: '/../user-contact/'
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
  '/paper-application-select':{
    backLink: './who-can',
    fields: ['confirm-csig-paper'],
    next: '/paper-application-confirmed',
    forks: [{
      target: '/confirm-your-identity',
      condition: {
        field: 'confirm-csig-paper',
        value: false
      }
    }]
  },
  '/select-overseas-method':{
    next: '/how-to',
  },
  '/paper-application-confirmed': {
    next: '../csig/'
  },
  '/application-in-queue': {
  },
};