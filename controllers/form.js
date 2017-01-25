var util = require('util'),
    Wizard = require('hmpo-form-wizard'),
    Model = require('../models/costs'),
    _ = require('underscore');
var Base = Wizard.Controller;

var Form = function Form(options) {
    Base.call(this, options);
};

util.inherits(Form, Base);

_.extend(Form.prototype, {

    getValues: function (req, res, callback) {
        Base.prototype.getValues.call(this, req, res, function (err, values) {
console.log(values);
            var model = new Model(values);
            callback(err, model.toJSON());
        });
    },

    locals: function (req/*, res*/) {
        return _.extend(Base.prototype.locals.apply(this, arguments), {
            urlSuffix: req.params && req.params.action ? '/' + req.params.action : '',
            test: 'TTTTTTT'
        });
    },
    getNextStep: function (req) {
        var next = Base.prototype.getNextStep.apply(this, arguments);
        if (req.params.action === 'edit' && !this.options.continueOnEdit) {
            next = req.baseUrl === '/' ? '/summary' : req.baseUrl + '/summary';
        } else if (req.params.action === 'edit') {
            next += '/edit';
        }
        return next;
    },
    getErrorStep: function (err, req) {
        var redirect = Base.prototype.getErrorStep.apply(this, arguments);
        if (req.params.action === 'edit' && !redirect.match(/\/edit$/)) {
            redirect += '/edit';
        }
        return redirect;
    },
    errorHandler: function (err, req, res, callback) { // eslint-disable-line no-unused-vars
        if (err.code === 'APPLICATION_SUBMITTED') {
            res.redirect(err.redirect);
        } else {
            Base.prototype.errorHandler.apply(this, arguments);
        }
    }

});

Form.Error = Wizard.Error;
Form.validators = Base.validators;
Form.formatters = Base.formatters;

module.exports = Form;
