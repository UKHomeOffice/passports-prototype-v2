var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if ( // If ANY of the fields are NOT filled in
        req.sessionModel.get('parent1-first-names') == '' ||
        req.sessionModel.get('parent1-last-name') == '' ||
        req.sessionModel.get('parents-married') == '' ||
        req.sessionModel.get('parent1-age-day') == '' ||
        req.sessionModel.get('parent1-age-month') == '' ||
        req.sessionModel.get('parent1-age-year') == ''
    ) {
        console.log("***PARENT 1 FIELDS INVALID");
        // TODO:
        // - expand additional info
        // - error message
        // - toggle: 'parent1-additional-information'
    } else {
        // console.log("***PARENT 1 FIELDS VALID");
    }
    Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;