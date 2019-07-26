var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.successHandler = function successHandler(req, res, callback) {

    var ageGroup = req.sessionModel.get('age-group')

    // Set fake `applicant-age` session variable so any dynamic content in `photo-checker` doesn't break
    var age = null
    if (ageGroup === '6-or-older') {
        age = 16
    } else if (ageGroup === '1-to-5') {
        age = 5
    } else if (ageGroup === 'under-1') {
        age = 0
    }

    req.sessionModel.set('applicant-age', age)

    Base.prototype.successHandler.call(this, req, res, callback)
}

module.exports = Controller