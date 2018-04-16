var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {
	if (req.sessionModel.get('parental-responsibility') == false && req.sessionModel.get('relationship-applicant') != "Other") {
	  return res.redirect('./name-change-docs-for-parents')
	} else if (req.sessionModel.get('parental-responsibility') == true && req.sessionModel.get('relationship-applicant') != "Other") {
	  return res.redirect('./declaration')
	}	else if (req.sessionModel.get('16-or-older') == false && req.sessionModel.get('relationship-applicant') == "Other") {
	  return res.redirect('./documents-thirdparty-under16')
	}	else {
	  return res.redirect('./documents-thirdparty-over16')
	}
}

module.exports = Controller
