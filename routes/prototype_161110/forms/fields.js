module.exports = {
    'continue': {
        legend: {
            className: 'visuallyhidden',
            value: 'Would you like to continue'
        },
        options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
        ],
        formatter: 'boolean',
        validate: [
            'required',
            { type: 'equal', arguments: true, redirect: '/end' }
        ]
    }
};
