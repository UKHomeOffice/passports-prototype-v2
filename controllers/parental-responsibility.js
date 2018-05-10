var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

    if (req.session['hmpo-wizard-common']['relationship-applicant'] == "Social Worker") {
      return res.redirect('./summary');
    } else if (req.session['hmpo-wizard-common']['16-or-older'] == false) {
      return res.redirect('./parental-responsibility');
    } else {
      return res.redirect('./summary');
    }

    Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
