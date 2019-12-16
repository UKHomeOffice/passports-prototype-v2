const _ = require('lodash');

module.exports = {
    'need-help': {
        legend: {
            value: 'Need help',
            className: 'visuallyhidden'
        },
        options: [{
            value: false,
                label: 'Leave feedback'
            },
            {
                value: true,
                label: 'Get help with my application'
            }
        ],
        formatter: ['boolean'],
    },
};
