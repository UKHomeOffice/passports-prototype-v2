var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function () {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.process = function process(req, res, callback) {
    if ( // If ANY of the fields are EMPTY
        !req.form.values['parent1-parent2-additional-information'] &&
        (
            !req.form.values['parent1-parent2-first-names'] ||
            !req.form.values['parent1-parent2-last-name']
        )
    ) { // Run validation on additional info
        this.options.fields['parent1-parent2-additional-information'].validate = ['required'];
    } else {
        this.options.fields['parent1-parent2-additional-information'].validate = [];
    }

    Base.prototype.process.call(this, req, res, callback);
}

Controller.prototype.getValues = function getValues(req, res, callback) {
    Base.prototype.getValues.call(this, req, res, (err, values) => {
        let errorParent1Parent2 = values.errors && values.errors['parent1-parent2-additional-information'];

        if (errorParent1Parent2 || values['parent1-parent2-additional-information']) {
            values.openParent1Parent2AdditionalInfo = 'open';
        }
        callback(err, values);
    });
}

module.exports = Controller;