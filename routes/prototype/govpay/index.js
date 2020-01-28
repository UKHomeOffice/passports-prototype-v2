var app = require('express')(),
    wizard = require('hmpo-form-wizard'),
    steps = require('./steps'),
    fields = require('./fields');

app.use(require('hmpo-template-mixins')(fields, { sharedTranslationKey: 'prototype' }));

app.use(wizard(steps, fields, {
  controller: require('../../../controllers/form'),
  templatePath: 'prototype/govpy',
  name: 'common'
 }));

app.get('/payment-declined-error', function (req, res, next) {
  res.render('prototype/govpay/payment-declined-error');
});
app.get('/technical-error', function (req, res, next) {
  res.render('prototype/govpay/technical-error');
});

module.exports = app;