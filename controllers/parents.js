var util = require('util')
var moment = require('moment')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.getValues = function getValues(req, res, callback) {
    Base.prototype.getValues.call(this, req, res, (err, values) => {
        let errorParent1 = values.errors && values.errors['parent1-additional-information'];
        let errorParent2 = values.errors && values.errors['parent2-additional-information'];

        if (errorParent1 || values['parent1-additional-information']) {
            values.openParent1AdditionalInfo = 'open';
        }
        if (errorParent2 || values['parent2-additional-information']) {
            values.openParent2AdditionalInfo = 'open';
        }
        callback(err, values);
    });
}

Controller.prototype.process = function process(req, res, callback) {
    if ( // If ANY of the fields are EMPTY
        !req.form.values['parent1-additional-information'] &&
        (
            !req.form.values['parent1-first-names'] ||
            !req.form.values['parent1-last-name'] ||
            !req.form.values['parent1-age-day'] ||
            !req.form.values['parent1-age-month'] ||
            !req.form.values['parent1-age-year']
        )
    ) { // Run validation on additional info
        this.options.fields['parent1-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent1-additional-information'].validate = [];
    }


    if ( // If ALL of the fields are EMPTY
        !req.form.values['parent2-additional-information'] &&
        !req.form.values['parent2-first-names'] &&
        !req.form.values['parent2-last-name'] &&
        (
            !req.form.values['parent2-age-day'] ||
            !req.form.values['parent2-age-month'] ||
            !req.form.values['parent2-age-year']
        )
    ) { // Run validation on additional info
        this.options.fields['parent2-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent2-additional-information'].validate = [];
    }

    Base.prototype.process.call(this, req, res, callback);
}

Controller.prototype.successHandler = function successHandler(req, res, callback) {

    var dobParent1 = moment(req.sessionModel.get('parent1-age-year') + '-' + req.sessionModel.get('parent1-age-month') + '-' + req.sessionModel.get('parent1-age-day'), 'YYYY-MM-DD');
    var dobParent2 = moment(req.sessionModel.get('parent2-age-year') + '-' + req.sessionModel.get('parent2-age-month') + '-' + req.sessionModel.get('parent2-age-day'), 'YYYY-MM-DD');

    // Check if DOB falls within certain date ranges, then set session variables
    req.sessionModel.set('parent1-born-before-1983', moment(dobParent1).isBefore('1983-01-01'));
    req.sessionModel.set('parent2-born-before-1983', moment(dobParent2).isBefore('1983-01-01'));

    Base.prototype.successHandler.call(this, req, res, callback);
}

module.exports = Controller;