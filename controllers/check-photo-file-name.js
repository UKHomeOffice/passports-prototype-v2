var util = require('util');
var Base = require('hmpo-form-wizard').Controller;

var Controller = function () {
    Base.apply(this, arguments);
};

util.inherits(Controller, Base);

Controller.prototype.successHandler = function successHandler(req, res, callback) {

    var fileInput = req.body['photo-choose-file'];

    if (fileInput) {
        var photoFileName = fileInput.substring(0, fileInput.lastIndexOf('.'));

        req.sessionModel.set('photo-file-name', photoFileName);
    }

    Base.prototype.successHandler.call(this, req, res, callback);
};

module.exports = Controller;
