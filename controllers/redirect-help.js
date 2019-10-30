var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {
    return res.redirect('https://www.passport.service.gov.uk/help');
};

module.exports = Controller;