module.exports = {
  '/': {
    backLink: '../intro/choose-photo-method',
    next: '/../uploadphoto',
    controller: require('../../../controllers/check-query-string'),
    forks: [{
      target: '/../uploadphoto-child',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['status'] == 'retry'
      }
    }]
  }
};