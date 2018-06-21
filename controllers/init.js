var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    req.sessionModel.set('application-for', true) // Set Who am I applying for to 'Me'

    Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;
