var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
		//console.log('renom:', req.session['hmpo-wizard-common']['renominate'])
		if (req.session['hmpo-wizard-common']) {
    	req.sessionModel.set('csig-email', req.session['hmpo-wizard-common']['csig-email']);
		} else {
			req.sessionModel.set('csig-email', 'test@thundercats.com');
		}
		if (!!req.session['hmpo-wizard-common']['renominate']) {
			if (req.session['hmpo-wizard-common']['renominate'] == 'true') {
				return res.redirect('tracking-waiting-renominate')
			}
		}
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller
