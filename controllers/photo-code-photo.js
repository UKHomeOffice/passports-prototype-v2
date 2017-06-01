var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var validUrls = [
    { 'url': '2pNfHiz' }
];

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

function isValidUrl(req) {
    return _.find(validUrls, function (o) {
        return o.url === req.sessionModel.get('photo-code-photo');
    });
}
Controller.prototype.successHandler = function successHandler(req, res, callback) {
    if (isValidUrl(req) ) {
        return res.redirect('retrieving');
    }
    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
