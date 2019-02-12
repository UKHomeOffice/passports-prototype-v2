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
  let rising16 = req.sessionModel.get('rising-16')


  /* Adult applications types */

  // FTA
  if (passportBefore === false || (passportBefore === false && rising16)) {
    req.sessionModel.set('application-type', 'first-adult')
  }

  // Renew
  if (passportBefore || (passportBefore && rising16)) {
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


  /* Child application types */

  // Child First Time
  if (passportBefore === false && age < 16 && !rising16) {
    req.sessionModel.set('application-type', 'first-child')
  }
  // Child renew 0-11s
  if (passportBefore && age < 12) {
    req.sessionModel.set('application-type', 'renew-child-0-11')
  }
  // Child renew 12-15s
  if (passportBefore && age > 11 && age < 16 && !rising16) {
    req.sessionModel.set('application-type', 'renew-child-12-15')
  }


  /* Replacement application types */

  // Replace Damaged Child 0–11s
  if (passportBefore && damaged && age < 12) {
    req.sessionModel.set('application-type', 'replacement-damaged-child-0-11')
  }
  // Replace Damaged Child 12–15s
  if (passportBefore && damaged && (age >= 12 && age < 16 && !rising16)) {
    req.sessionModel.set('application-type', 'replacement-damaged-child-12-15')
  }
  // Replace Damaged Adult
  if (passportBefore && damaged && age >= 16 || (passportBefore && damaged && rising16)) {
    req.sessionModel.set('application-type', 'replacement-damaged-adult')
  }
  // Replace Lost or Stolen Child 0–11s
  if (passportBefore && lostOrStolen && age < 12) {
    req.sessionModel.set('application-type', 'replacement-lost-or-stolen-child-0-11')
  }
  // Replace Lost or Stolen Child 12–15s
  if (passportBefore && lostOrStolen && (age >= 12 && age < 16 && !rising16)) {
    req.sessionModel.set('application-type', 'replacement-lost-or-stolen-child-12-15')
  }
  // Replace Lost or Stolen Adult
  if (passportBefore && lostOrStolen && age >= 16 || (passportBefore && damaged && rising16)) {
    req.sessionModel.set('application-type', 'replacement-lost-or-stolen-adult')
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