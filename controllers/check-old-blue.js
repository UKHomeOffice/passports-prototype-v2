var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {
    var date = moment(req.sessionModel.get('issue-year') + '-' + req.sessionModel.get('issue-month') + '-' + req.sessionModel.get('issue-day'), 'YYYY-MM-DD');
    var oldBlue = moment(date).isBefore('1994-01-01', 'years');

    console.log('Old blue:', oldBlue);

    if (oldBlue == false) {
        req.sessionModel.set('old-blue', false);
    }
    if (oldBlue == true) {
        req.sessionModel.set('old-blue', true);
    }

    Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;