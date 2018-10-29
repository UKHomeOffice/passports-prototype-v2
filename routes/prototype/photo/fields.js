module.exports = {
    'choose-photo': {
        legend: {
                value: 'I already have a digital photo',
                className: 'visuallyhidden'
            },
            options: [{
                value: 'upload',
                label: 'I have a digital photo to upload'
            }, {
                value: 'code',
                label: 'I have a code to enter',
                toggle: 'photo-code'
            }]
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
    'oix-override': {
        legend: {
            value: 'Do you want to use this photo?',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes'
            },
            {
                value: 'No'
            }
        ],
        validate: [
            'required',
            {
                type: 'equal',
                arguments: ['Yes'],
                redirect: '/../choose-photo-method'
            }
        ]
    },
    'oix-override-reason': {
        legend: {
            value: 'Do you want to use this photo?',
            className: 'visuallyhidden'
        },
        dependent: {
            field: 'oix-override',
            value: 'Yes'
        },
        validate: 'required'
    },
    'override': {
        legend: {
            value: 'Do you want to use this photo?',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes',
                label: 'Yes, I do'
            },
            {
                value: 'No',
                label: 'No, I dont'
            }
        ],
        validate: [
            'required',
            {
                type: 'equal',
                arguments: ['No', 'No'],
                redirect: '/../choose-photo-method'
            },
            {
                type: 'equal',
                arguments: ['No', 'Yes'],
                redirect: '/../question-expression'
            }
        ]
    }
};