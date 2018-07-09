var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
		if (req.session['hmpo-wizard-common']) {
    	req.sessionModel.set('csig-email', req.session['hmpo-wizard-common']['csig-email']);
		} else {
			req.sessionModel.set('csig-email', 'test@thundercats.com');
		}

		if (req.url =='/user-contact/email-sent') {
			if (req.session['hmpo-wizard-common']['renominate'] == 'true') {
				return res.redirect('tracking-waiting-renominate')
			}
			if (req.session['hmpo-wizard-common']['renominate'] == 'anytime') {
				return res.redirect('tracking-waiting-renominate-anytime')
			}
		}

    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller
