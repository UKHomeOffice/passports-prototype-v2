module.exports = {
  '/': {
    backLink: '../intro/choose-photo-method',
    next: '../uploadphoto',
    forks: [{
      target: '../uploadphoto/child',
      condition: function (req, res) {
        return req.session['hmpo-wizard-common']['applicant-age'] <= 15 && req.session['hmpo-wizard-common']['passport-before'] === false // If they are child FTA then child photo journey
      }
    }]
  }
};