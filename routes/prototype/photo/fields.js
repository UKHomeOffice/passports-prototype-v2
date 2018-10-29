module.exports = {
    'choose-photo': {
        legend: {
            value: 'What are you trying to do?',
            className: 'visuallyhidden'
        },
        options: [{
            value: 'myself',
            label: 'Show me how to do it myself'
        }, {
            value: 'shop',
            label: 'Show me how to get it from a shop (not yet prototyped)'
        }, {
            value: 'code',
            label: 'I have a printed photo with a code'
        }, {
            value: 'upload',
            label: 'I already have a digital photo'
        }],
        validate: [
            'required',
            {
                type: 'equal',
                arguments: ['upload', 'shop', 'code'],
                redirect: '/../photo-guide'
            }, {
                type: 'equal',
                arguments: ['upload', 'myself', 'code'],
                redirect: '/../photo-booth-shop'
            }, {
                type: 'equal',
                arguments: ['upload', 'upload', 'code'],
                redirect: '/../upload'
            }, {
                type: 'equal',
                arguments: ['upload', 'myself', 'shop'],
                redirect: '/retrieve'
            }
        ]
    },
    'choose-photo-overseas': {
        legend: {
            value: 'What are you trying to do?',
            className: 'visuallyhidden'
        },
        options: [{
            value: 'myself',
            label: 'Show me how to do it myself'
        }, {
            value: 'upload',
            label: 'I already have a digital photo'
        }],
        validate: [
            'required',
            {
                type: 'equal',
                arguments: ['upload', 'shop'],
                redirect: '/../photo-guide'
            }, {
                type: 'equal',
                arguments: ['upload', 'upload'],
                redirect: '/../upload'
            }
        ]
    },
    'plain-expression': {
        legend: {
            value: 'Do you have a plain expression?',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes',
                label: 'Yes, I have a plain expression'
            },
            {
                value: 'No',
                label: 'No, I have a slight smile or frown'
            }
        ],
        validate: [
            'required',
            {
                type: 'equal',
                arguments: ['No', 'No'],
                redirect: '/shadows-face'
            },
            {
                type: 'equal',
                arguments: ['No', 'Yes'],
                redirect: '/you-need-another-photo'
            }
        ]
    },
    'shadows-face': {
        legend: {
            value: 'Are there any shadows on your face or in the background?',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes',
                label: 'My photo looks ok – there are no shadows'
            },
            {
                value: 'No',
                label: 'There’s a shadow on my face or background'
            }
        ],
        validate: [
            'required',
            {
                type: 'equal',
                arguments: ['No', 'No'],
                redirect: '/final-checks'
            },
            {
                type: 'equal',
                arguments: ['No', 'Yes'],
                redirect: '/you-need-another-photo'
            }
        ]
    }
};