var app = require('express')(),
    steps = require('./steps'),
    fields = require('./fields');

app.use(require('hmpo-template-mixins')(fields));

app.use(require('hmpo-form-wizard')(steps, fields, { templatePath: 'shops-photo-checker' }));

module.exports = app;
