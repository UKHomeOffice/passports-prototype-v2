/*
 * This controller sets the 'application-type' in the session
 * This controller is called in filter summary page
 */

var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
  Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
  console.log(req.session)

  let issueDate = moment(req.sessionModel.get('issue-year') + '-' + req.sessionModel.get('issue-month') + '-' + req.sessionModel.get('issue-day'), 'YYYY-MM-DD');
  let hiddenFirstTime = '1929-09-02'
  let age = req.sessionModel.get('applicant-age')
  let passportBefore = req.sessionModel.get('passport-before')

  /* Adult applications types */

  // FTA
  if (passportBefore === false) {
    req.sessionModel.set('application-type', 'first')
  }

  // Renew

  if (passportBefore) {
    req.sessionModel.set('application-type', 'renew')

    // Old Blue
    let oldBlue = moment(date).isBefore('1994-01-01', 'years');
    if (oldBlue) {
      req.sessionModel.set('old-blue', true)
      req.sessionModel.set('application-type', 'renew-old-blue')
    } else {
      req.sessionModel.set('old-blue', false)
    }
  }

  // Hidden FTA (Vetran)
  if (passportBefore && issueDate.isBefore(hiddenFirstTime)) {
    req.sessionModel.set('application-type', 'first-hidden')
  }

  // Replacements
  let lostAndStolen = req.sessionModel.get('lost-stolen')
  if (lostAndStolen && passportBefore) {
    req.sessionModel.set('application-type', 'replacement')
  }

  /* Child application types */

  // Child First Time
  if (passportBefore === false && age < 16) {
    req.sessionModel.set('application-type', 'first-child')
  }
  // Child renew 0-11s
  if (passportBefore && age < 12) {
    req.sessionModel.set('application-type', 'renew-child-0-11')
  }
  // Child renew 12-15s
  if (passportBefore && age > 11 && age < 16) {
    req.sessionModel.set('application-type', 'renew-child-12-15')
  }

  /* Overseas */
  if (req.sessionModel.get('is-overseas')) {
    let applicationType = req.sessionModel.get('application-type')
    req.sessionModel.set('application-type', 'overseas-' + applicationType)
  }

  Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller