const _ = require('lodash');
const countries = require('../../config/countries');

module.exports = {
    'typeahead': {
        className: 'typeahead',
        options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
            return {
                value: c.id,
                label: c.name,
                attributes: [
                    {
                        attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                    }
                ]
            }
        })),
        validate: [
            'required'
        ],
        groupAttributes: [
            { attribute: 'data-previous-value', value: '{{values.typeahead}}' }
        ]
    }
};
