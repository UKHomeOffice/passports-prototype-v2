var app = require('express')(),
    wizard = require('hmpo-form-wizard'),
    steps = require('./steps'),
    fields = require('./fields');

app.use(require('hmpo-template-mixins')(fields));

app.use(wizard(steps, fields, { templatePath: 'forms' }));

module.exports = app;
