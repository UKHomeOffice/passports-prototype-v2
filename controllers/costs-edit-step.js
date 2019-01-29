
var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.getNextStep = function (req) {
    var next = Base.prototype.getNextStep.apply(this, arguments);

    // Get edit next page
    if (req.params.action === 'edit' && !this.options.continueOnEdit) {
        next = req.baseUrl === '/' ? '/cost' : req.baseUrl + '/cost';
    } else if (req.params.action === 'edit') {
        next += '/edit';
    }
    return next;
};

module.exports = Controller
