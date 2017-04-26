var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var validUrls = [
    { 'url': '1231231234X' }
];

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

function isValidUrl(req) {
    return _.find(validUrls, function (o) {
        return o.url === req.sessionModel.get('reference');
    });
}
Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (isValidUrl(req) ) {
        return res.redirect('track-email');
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
