var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.get = function successHandler(req, res, callback) {

    if (/photo-checker/.test(req.originalUrl)) {
        if (req.sessionModel.get('choose-photo') == 'take' || req.sessionModel.get('choose-photo') == 'upload') {
            var photoFileName = req.sessionModel.get('photo-file-name');

            if (photoFileName) {
                if (photoFileName.endsWith('variation-1')) return res.redirect('./check-and-submit-photo-variation-1');
                if (photoFileName.endsWith('variation-2')) return res.redirect('./check-and-submit-photo-variation-2');
                if (photoFileName.endsWith('variation-3')) return res.redirect('./check-and-submit-photo-variation-3');
                if (photoFileName.endsWith('variation-4')) return res.redirect('./check-and-submit-photo-variation-4');
                if (photoFileName.endsWith('variation-5')) return res.redirect('./check-and-submit-photo-variation-5');
                if (photoFileName.endsWith('variation-6')) return res.redirect('./check-and-submit-photo-variation-6');
                if (photoFileName.endsWith('1')) return res.redirect('./check-and-submit-passed-photo');
                if (photoFileName.endsWith('2')) return res.redirect('./check-and-submit-photo');
                if (photoFileName.endsWith('3')) return res.redirect('./not-accepted');
            }

            res.redirect('./check-and-submit-passed-photo');
        }
        else if (req.sessionModel.get('choose-photo') == 'code') {
            var url = req.sessionModel.get('photo-code-path');

            if (url.startsWith('variation-1')) return res.redirect('./check-and-submit-photo-variation-1');
            if (url.startsWith('variation-2')) return res.redirect('./check-and-submit-photo-variation-2');
            if (url.startsWith('variation-3')) return res.redirect('./check-and-submit-photo-variation-3');
            if (url.startsWith('variation-4')) return res.redirect('./check-and-submit-photo-variation-4');
            if (url.startsWith('variation-5')) return res.redirect('./check-and-submit-photo-variation-5');
            if (url.startsWith('variation-6')) return res.redirect('./check-and-submit-photo-variation-6');
            if (url.startsWith('1')) return res.redirect('./check-and-submit-passed-photo');
            if (url.startsWith('2')) return res.redirect('./check-and-submit-photo');
            if (url.startsWith('3')) return res.redirect('./not-accepted');

            res.redirect('./code-error');
        }
        else {
            res.redirect('./check-and-submit-passed-photo');
        }
    }
    else {
        if (req.sessionModel.get('choose-photo') == 'take' || req.sessionModel.get('choose-photo') == 'upload') {
            var photoFileName = req.sessionModel.get('photo-file-name');

            if (photoFileName) {
                if (photoFileName.endsWith('1')) return res.redirect('./check-and-submit-passed-photo');
                if (photoFileName.endsWith('2')) return res.redirect('./check-and-submit-okay-1-photo');
                if (photoFileName.endsWith('3')) return res.redirect('./check-and-submit-okay-2-photo');
                if (photoFileName.endsWith('4')) return res.redirect('./check-and-submit-failed-photo');
                if (photoFileName.endsWith('5')) return res.redirect('./not-accepted');
            }

            res.redirect('./check-and-submit-passed-photo');
        }
        else if (req.sessionModel.get('choose-photo') == 'code') {
            var url = req.sessionModel.get('photo-code-path');

            if (url.startsWith('1')) return res.redirect('./check-and-submit-passed-photo');
            if (url.startsWith('2')) return res.redirect('./check-and-submit-okay-1-photo');
            if (url.startsWith('3')) return res.redirect('./check-and-submit-okay-2-photo');
            if (url.startsWith('4')) return res.redirect('./check-and-submit-failed-photo');
            if (url.startsWith('5')) return res.redirect('./not-accepted');

            res.redirect('./code-error');
        }
        else {
            res.redirect('./check-and-submit-passed-photo');
        }
    }
};

module.exports = Controller;
