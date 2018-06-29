var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

    // Check if they have a Naturalisation or Registration certificate
    var natRegCert = req.sessionModel.get('naturalisation-registration-certificate')
    req.sessionModel.set('naturalisation-registration-certificate', false)
    if (natRegCert == false) {
        req.sessionModel.set('naturalisation-registration-certificate', false)
    }
    else {
        req.sessionModel.set('naturalisation-registration-certificate', true)
    }

    Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;