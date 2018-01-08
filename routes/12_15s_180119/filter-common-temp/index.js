var app = require('express')(),
    wizard = require('hmpo-form-wizard'),
    steps = require('./steps'),
    fields = require('./fields');

app.use(require('hmpo-template-mixins')(fields, { sharedTranslationKey: 'prototype' }));

app.use(wizard(steps, fields, {
  controller: require('../../../controllers/form'),
  templatePath: '12_15s_180119/filter-common-temp' }));

module.exports = app;
