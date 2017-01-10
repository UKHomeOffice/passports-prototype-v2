var app = require('express').Router();

app.get('/', function (req, res, next) {
  res.render('priority-service/not-eligible');
});

module.exports = app;
