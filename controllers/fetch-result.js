var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {
    var url = req.sessionModel.get('photo-code-path');

    if (url.startsWith('1')) return res.redirect('../photo/uploadphoto-oix/happy-check-photo-and-submit');
    if (url.startsWith('2')) return res.redirect('../photo/uploadphoto-oix/check-photo-and-submit');
    if (url.startsWith('3')) return res.redirect('../photo/uploadphoto-oix/error-check-photo-and-submit');

    res.redirect('error');
};

module.exports = Controller;
