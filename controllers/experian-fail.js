var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {
    console.log(req.session['hmpo-wizard-50']['address-postcode']);
    if (req.session['hmpo-wizard-50']['address-postcode'].startsWith('N')) {
        return res.redirect('/csig-bank-check');
    } else {
      setTimeout(function(){window.location.href='csig-identity-confirmed'}, 5000);
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
