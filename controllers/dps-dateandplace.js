
// var util = require('util')
// var Base = require('hmpo-form-wizard').Controller

// var Controller = function() {
// 	Base.apply(this, arguments)
// }

// util.inherits(Controller, Base)


// Controller.prototype.getValues = function getValues(req, res, callback) {
//     Base.prototype.getValues.call(this, req, res, (err, values) => {
//         //console.log("---testThis----");
//         callback(err, values);
//     });
// }

// module.exports = Controller

var util = require('util')
var Base = require('./form')


var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.getValues = function getValues(req, res, callback) {
    Base.prototype.getValues.call(this, req, res, (err, values) => {
        req.sessionModel.set('location', 'Newport');
        callback(err, values);
    });
}
module.exports = Controller;

