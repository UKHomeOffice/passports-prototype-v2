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