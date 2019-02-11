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

  let issueDate = moment(req.sessionModel.get('issue-year') + '-' + req.sessionModel.get('issue-month') + '-' + req.sessionModel.get('issue-day'), 'YYYY-MM-DD');
  let dob = moment(req.sessionModel.get('age-year') + '-' + req.sessionModel.get('age-month') + '-' + req.sessionModel.get('age-day'), 'YYYY-MM-DD');
  let veteran = moment(dob).isSameOrBefore('1929-09-03');
  let oldBlue = moment(issueDate).isBefore('1994-01-01', 'years');
  let age = req.sessionModel.get('applicant-age')
  let passportBefore = req.sessionModel.get('passport-before')
  let damaged = req.sessionModel.get('passport-damaged')
  let lostOrStolen = req.sessionModel.get('lost-stolen')


  /* Adult applications types */

  // FTA
  if (passportBefore === false) {
    req.sessionModel.set('application-type', 'first-adult')
  }

  // Renew
  if (passportBefore) {
    req.sessionModel.set('application-type', 'renew-adult')
    // Old Blue
    if (oldBlue) {
      req.sessionModel.set('old-blue', true)
      req.sessionModel.set('application-type', 'old-blue')
    } else {
      req.sessionModel.set('old-blue', false)
    }
  }

  // Veteran
  if (veteran) {
    req.sessionModel.set('application-type', 'veteran')
  }


  /* Replacement application types */

  // Replace Damaged
  if (passportBefore && damaged) {
    req.sessionModel.set('application-type', 'replacement-damaged')
  }

  // Replace Lost or Stolen
  if (passportBefore && lostOrStolen) {
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
  // if (req.sessionModel.get('is-overseas')) {
  //   let applicationType = req.sessionModel.get('application-type') // Would get set by any of the above conditions
  //   req.sessionModel.set('application-type', 'overseas-' + applicationType)
  // }


  console.log(req.session)
  Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller