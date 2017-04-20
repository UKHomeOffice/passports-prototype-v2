var util = require('util');
var Base = require('hmpo-form-wizard').Controller;
var _ = require('lodash');

var validUrls = [
    { 'url': 'www.test.com/photo01.png' },
    { 'url': 'www.test.com/photo02.png' },
    { 'url': 'www.test2.com/photo01.png' }
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
