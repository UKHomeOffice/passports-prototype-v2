var app = require('express')(),
    wizard = require('hmpo-form-wizard'),
    steps = require('./steps');

app.use(require('hmpo-template-mixins')(fields, { sharedTranslationKey: 'prototype' }));

app.use(wizard(steps, fields, {
  controller: require('../../../controllers/form'),
  templatePath: 'prototype/govpay-errors',
  name: 'common'
 }));

 app.get('/payment-declined-error', function (req, res, next) {
  res.render('prototype/govpay-errors/payment-declined-error');
});

module.exports = app;