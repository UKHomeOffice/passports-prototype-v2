var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.process = function process(req, res, callback) {
    if ( // If ALL of the fields are EMPTY
        !req.form.values['parent2-parent1-additional-information'] &&
        !req.form.values['parent2-parent1-first-names'] &&
        !req.form.values['parent2-parent1-last-name'] &&
        !req.form.values['parent2-parent1-town-of-birth'] &&
        !req.form.values['parent2-parent1-country-of-birth'] &&
        (
            !req.form.values['parent2-parent1-age-day'] ||
            !req.form.values['parent2-parent1-age-month'] ||
            !req.form.values['parent2-parent1-age-year']
        )
    ) { // Run validation on additional info
        this.options.fields['parent2-parent1-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent2-parent1-additional-information'].validate = [];
    }


    if ( // If ALL of the fields are EMPTY
        !req.form.values['parent2-parent2-additional-information'] &&
        !req.form.values['parent2-parent2-first-names'] &&
        !req.form.values['parent2-parent2-last-name'] &&
        !req.form.values['parent2-parent2-town-of-birth'] &&
        !req.form.values['parent2-parent2-country-of-birth'] &&
        (
            !req.form.values['parent2-parent2-age-day'] ||
            !req.form.values['parent2-parent2-age-month'] ||
            !req.form.values['parent2-parent2-age-year']
        )
    ) { // Run validation on additional info
        this.options.fields['parent2-parent2-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent2-parent2-additional-information'].validate = [];
    }

    Base.prototype.process.call(this, req, res, callback);
}

Controller.prototype.getValues = function getValues(req, res, callback) {
    Base.prototype.getValues.call(this, req, res, (err, values) => {
        let errorParent2Parent1 = values.errors && values.errors['parent2-parent1-additional-information'];
        let errorParent2Parent2 = values.errors && values.errors['parent2-parent2-additional-information'];

        if (errorParent2Parent1 || values['parent2-parent1-additional-information']) {
            values.openParent2Parent1AdditionalInfo = 'open';
        }
        if (errorParent2Parent2 || values['parent2-parent2-additional-information']) {
            values.openParent2Parent2AdditionalInfo = 'open';
        }
        callback(err, values);
    });
}

module.exports = Controller;