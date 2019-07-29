var util = require('util');

var Model = require('hmpo-model'),
    config = require('../config/default.json'),
    moment = require('moment');

var veteranEndDate = moment(config.veteranEndDate);

var Costs = function (attrs, options) {
    var self = this;
    Model.call(this, attrs, options);
    Object.defineProperty(this.attributes, 'cost', {
        enumerable: true,
        get: Costs.prototype.getCost.bind(self)
    });
    Object.defineProperty(this.attributes, 'veteran', {
        enumerable: true,
        get: function () {
            var dob = moment(this.get('date-of-birth'), 'YYYY-MM-DD');
            return dob.isBefore(veteranEndDate);
        }.bind(this)
    });
};

util.inherits(Costs, Model);

Costs.prototype.getCost = function () {

    if (this.get('is-overseas')) {
        config = require('../config/overseas-costing.json')
    }

    var cost = 0;

    if (this.get('urgent') === true ) {
        cost += config.costs['premium-service'];
    } else if (this.get('16-or-older') === false) {
        cost += this.get('veteran') ? 0 : config.costs['standard-child'];
    } else {
        cost += this.get('veteran') ? 0 : config.costs['standard-service'];
    }

    if (this.get('passport-options') == '50') {
        cost += this.largePassport();
    }
    if (this.get('passport-options-overseas') == '50') {
        cost += this.largePassport() + 25.36;
    }
    if (this.get('passport-options-overseas') == '34') {
        cost += 30.36;
    }
    if (this.get('secure-return') || this.get('is-overseas')) {
        cost += this.delivery();
    }
    if (this.get('passport-options-dps') == '50') {
        cost += this.largePassport() + 51.5;
    }
    if (this.get('passport-options-dps') == '34') {
        cost += 55.5;
        console.log(cost);
    }
    return cost;
};

Costs.prototype.standardPassport = function standardPassport() {
    var cost = 0
    if (this.get('16-or-older') === false) {
        cost += this.get('veteran') ? 0 : config.costs['standard-child'];
    } else {
        cost += this.get('veteran') ? 0 : config.costs['standard-service'];
    }
    return cost;
};

Costs.prototype.dpsPassport = function dpsPassport() {
    var cost = config.costs['premium-service'];

    if (this.get('veteran') && this.get('service-level') !== 'Premium') {
        cost += config.costs['standard-service'];
    }
    return cost;
};

Costs.prototype.largePassport = function largePassport() {
    var cost = config.costs['large-passport'];

    if (this.get('veteran') && this.get('service-level') !== 'Premium') {
        cost += config.costs['standard-service'];
    }
    return cost;
};

Costs.prototype.delivery = function delivery() {
    var cost = 0;

    if (this.get('secure-return') && !this.get('veteran')) {
        cost += config.costs['secure-delivery'];
    } else if (this.get('is-overseas')) {
        cost += config.costs['delivery'];
    }
    return cost;
};

module.exports = Costs;