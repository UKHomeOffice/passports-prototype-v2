var app = require('express')(),
    wizard = require('hmpo-form-wizard'),
    steps = require('./steps'),
    fields = require('./fields');

app.use(require('hmpo-template-mixins')(fields, { sharedTranslationKey: 'prototype' }));

app.use(wizard(steps, fields, {
    controller: require('../../../controllers/form'),
    templatePath: 'prototype_170331/renew',
    name: 'common',
    params: '/:action?'
}));

module.exports = app;
