const express = require('express');
const templateMixins = require('hmpo-template-mixins');
const wizard = require('hmpo-form-wizard');
const steps = require('./steps');
const fields = require('./fields');

var app = express.Router();

app.use(templateMixins(fields));

app.use(wizard(steps, fields, { templatePath: 'csig' }));

module.exports = app;
