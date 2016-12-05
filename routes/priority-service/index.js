var app = require('express')(),
    steps = require('./steps');

app.use(require('hmpo-form-wizard')(steps, {}, { templatePath: 'priority-service' }));

module.exports = app;
