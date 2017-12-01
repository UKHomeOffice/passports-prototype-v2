var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {

	if (req.sessionModel.get('change-of-name-reason') == undefined){
		return res.redirect('./declaration')
	} else {
	switch (req.sessionModel.get('change-of-name-reason')) {
		case 'Marriage':
			return res.redirect('./name-change-docs-for-marriage')
		case 'Divorce':
			return res.redirect('./name-change-docs-for-divorce')
		case 'Small':
			return res.redirect('./name-change-docs-for-small-changes')
		case 'Gender':
			return res.redirect('./name-change-docs-for-gender-change')
		case 'Other':
			return res.redirect('./name-change-docs-for-other-changes')
	}
	}
}

module.exports = Controller
