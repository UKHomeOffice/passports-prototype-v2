module.exports = {
    'age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'age-group': {
        legend: {
            value: 'What is your age?',
            className: 'visuallyhidden'
        },
        options: [{
                value: '6-or-older',
                label: '6 years or older'
            },
            {
                value: '1-to-5',
                label: '1–5 years'
            },
            {
                value: 'under-1',
                label: 'Under 1 year'
            }
        ],
        validate: [
            'required'
        ]
    },
    'choose-photo': {
        legend: {
            value: 'I already have a digital photo',
            className: 'visuallyhidden'
        },
        options: [{
            value: 'upload',
            label: 'I’ll take or upload a digital photo'
        }, {
            value: 'code',
            label: 'I have a code to enter',
            toggle: 'photo-code'
        }]
    }
};