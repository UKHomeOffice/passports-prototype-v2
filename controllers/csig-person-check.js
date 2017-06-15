var util = require('util')
var Base = require('./form')

var Controller = function Controller(options) {

    Base.call(this, options);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (req.sessionModel.get('person-check') && req.sessionModel.get('person-check') == 'no') {
        return res.redirect(this.options.nextAlt);
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;