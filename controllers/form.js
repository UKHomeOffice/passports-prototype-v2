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
            console.log('GET', values);
            var model = new Model(values);
            callback(err, model.toJSON());
        });
    },

    saveValues: function (req, res, callback) {
        Base.prototype.saveValues.call(this, req, res, function (err) {
            console.log('\n\n**************************\n', 'SESSION', req.session, '\n**************************\n');
            console.log('SAVE', req.form.values);
            console.log('VALUES', req.sessionModel.toJSON());
            callback(err);
        });
    },

    locals: function (req /*, res*/ ) {
        return _.extend(Base.prototype.locals.apply(this, arguments), {
            urlSuffix: req.params && req.params.action ? '/' + req.params.action : '',
            test: 'TTTTTTT'
        });
    },
    getNextStep: function (req) {
        var next = Base.prototype.getNextStep.apply(this, arguments);

        // Set edit delivery options next page for fta and renew
        // var host = req.get('host') === 'hmpo-prototypes.herokuapp.com' ? 'https://' + req.get('host') : req.protocol + '://' + req.get('host')
        // if (req.get('referer') === host + '/prototype/renew/summary') {
        //     req.sessionModel.set('changeDeliveryNextPage', '/summary')
        // } else if (req.get('referer') === host + '/prototype/renew/docs-fta') {
        //     req.sessionModel.set('changeDeliveryNextPage', '/docs-fta')
        // } else if (req.get('referer') === host + '/prototype/renew/docs-renew') {
        //     req.sessionModel.set('changeDeliveryNextPage', '/docs-renew')
        // }

        // if (req.params.action === 'edit' && req.get('referer') === host + '/prototype/renew/passport-special-delivery/edit') {
        //     next = req.baseUrl === '/' ? req.sessionModel.get('changeDeliveryNextPage') : req.baseUrl + req.sessionModel.get('changeDeliveryNextPage');
        // }

        // Get edit next page
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