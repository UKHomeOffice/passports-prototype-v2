var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

const AllErrors = false; // Option 1 = true; Option 3 = false

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
        if (AllErrors) {
            this.options.fields['parent1-first-names'].validate = ['required'];
            this.options.fields['parent1-last-name'].validate = ['required'];
            this.options.fields['parent1-age-day'].validate = ['required'];
            this.options.fields['parent1-age-month'].validate = ['required'];
            this.options.fields['parent1-age-year'].validate = ['required'];
        }
        this.options.fields['parent1-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent1-first-names'].validate = [];
        this.options.fields['parent1-last-name'].validate = [];
        this.options.fields['parent1-age-day'].validate = [];
        this.options.fields['parent1-age-month'].validate = [];
        this.options.fields['parent1-age-year'].validate = [];
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
        if (AllErrors) {
            this.options.fields['parent2-first-names'].validate = ['required'];
            this.options.fields['parent2-last-name'].validate = ['required'];
            this.options.fields['parent2-age-day'].validate = ['required'];
            this.options.fields['parent2-age-month'].validate = ['required'];
            this.options.fields['parent2-age-year'].validate = ['required'];
        }
        this.options.fields['parent2-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent2-first-names'].validate = [];
        this.options.fields['parent2-last-name'].validate = [];
        this.options.fields['parent2-age-day'].validate = [];
        this.options.fields['parent2-age-month'].validate = [];
        this.options.fields['parent2-age-year'].validate = [];
        this.options.fields['parent2-additional-information'].validate = [];
    }

    Base.prototype.process.call(this, req, res, callback);
}

Controller.prototype.getValues = function getValues(req, res, callback) {
    Base.prototype.getValues.call(this, req, res, (err, values) => {
        let error = values.errors && values.errors['parent1-additional-information'];
        if (error || values['parent1-additional-information']) {
            values.openParent1AdditionalInfo = 'open';
        }
        if (values['parent2-additional-information']) {
            values.openParent2AdditionalInfo = 'open';
        }
        callback(err, values);
    });
}

module.exports = Controller;