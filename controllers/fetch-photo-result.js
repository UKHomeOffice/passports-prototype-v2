var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {

    if (req.sessionModel.get('choose-photo') == 'take' || req.sessionModel.get('choose-photo') == 'upload') {
        var photoFileName = req.sessionModel.get('photo-file-name');

        if (photoFileName) {
            if (photoFileName.endsWith('1')) return res.redirect('../photo/check-and-submit-passed-photo');
            if (photoFileName.endsWith('2')) return res.redirect('../photo/check-and-submit-photo');
            if (photoFileName.endsWith('3')) return res.redirect('../photo/not-accepted');
        }

        res.redirect('../photo/check-and-submit-passed-photo');
    }
    else if (req.sessionModel.get('choose-photo') == 'code') {
        var url = req.sessionModel.get('photo-code-path');

        if (url.startsWith('1')) return res.redirect('../photo/check-and-submit-passed-photo');
        if (url.startsWith('2')) return res.redirect('../photo/check-and-submit-photo');
        if (url.startsWith('3')) return res.redirect('../photo/not-accepted');

        res.redirect('../photo/code-error');
    }
    else {
        res.redirect('../photo/check-and-submit-passed-photo');
    }
};

module.exports = Controller;
