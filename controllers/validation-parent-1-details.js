var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
    Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.process = function process(req, res, callback) {
    if ( // If ANY of the fields are EMPTY
        req.sessionModel.get('parent1-first-names') == '' ||
        req.sessionModel.get('parent1-last-name') == '' ||
        req.sessionModel.get('parents-married') == '' ||
        req.form.values['parent1-age-day'] == '' ||
        req.form.values['parent1-age-month'] == '' ||
        req.form.values['parent1-age-year'] == ''
    ) { // Run validation on additional info
        this.options.fields['parent1-additional-information'].validate = [
            { type: 'required' }
        ];
    } else {
        this.options.fields['parent1-additional-information'].validate = [
        ];
    }
    Base.prototype.process.call(this, req, res, callback);
}

Controller.prototype.getValues = function getValues(req, res, callback) {
    Base.prototype.getValues.call(this, req, res, (err, values) => {
        let error = values.errors && values.errors['parent1-additional-information'];

        if (error && error.type === 'required') {
            let fieldNames = [];

            if (!values['parent1-first-names'] || !values['parent1-last-names'])
                fieldNames.push('Parent\'s name');
            if (!values['parent1-age-day'] || !values['parent1-age-month'] || !values['parent1-age-year'])
                fieldNames.push('Parent\'s date of birth');

            values.errors['parent1-additional-information'] = {
                key: error.key,
                type: error.type,
                message: error.message.replace('<fieldnames>', fieldNames.join(', '))
            };

            req.sessionModel.set('errors', values.errors);

            console.log('errors', values.errors);
        }

        if (error || values['parent1-additional-information']) {
            values.openAdditionalInfo = 'open';
        }

        callback(err, values);
    });
}

module.exports = Controller;