var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var validUrls = [
    { 'url': 'https://www.maxphoto.co.uk/services/passport-photos/digital-passport-photographs/x3e0P1' },
    { 'url': 'https://www.maxphoto.co.uk/services/passport-photos/digital-passport-photographs/x3e0Pc1wl2k6a5dm' },
    { 'url': 'http://bit.ly/2oq9B425' }
];

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

function isValidUrl(req) {
    return _.find(validUrls, function (o) {
        return o.url === req.sessionModel.get('photo-url');
    });
}
Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (isValidUrl(req) ) {
        return res.redirect('success');
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
