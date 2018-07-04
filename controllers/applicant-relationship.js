var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (req.session['hmpo-wizard-common']['application-for-why'] == 'adult-supported') {
        return res.redirect('./summary');
    }

};

module.exports = Controller;
