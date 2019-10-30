const _ = require('lodash');

module.exports = {
    'need-help': {
        legend: {
            value: 'Need help',
            className: 'visuallyhidden'
        },
        options: [{
                value: true,
                label: 'Yes'
            },
            {
                value: false,
                label: 'No'
            }
        ],
        formatter: ['boolean'],
        className: 'inline'
    },
};
