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
        //     value: 'take',
        //     label: 'I’ll take a digital photo – show me how'
        // }, {
        //     value: 'upload',
        //     label: 'I have a digital photo – upload it now'
        // }, {
            value: 'upload',
            label: 'I’ll take or upload a digital photo'
        }, {
            value: 'code',
            label: 'I have a code to enter',
            toggle: 'photo-code'
        }]
    },
    // 'choose-photo-overseas': {
    //     legend: {
    //         value: 'What are you trying to do?',
    //         className: 'visuallyhidden'
    //     },
    //     options: [{
    //         value: 'myself',
    //         label: 'Show me how to do it myself'
    //     }, {
    //         value: 'upload',
    //         label: 'I already have a digital photo'
    //     }],
    //     validate: [
    //         'required',
    //         {
    //             type: 'equal',
    //             arguments: ['upload', 'shop'],
    //             redirect: '/../photo-guide'
    //         }, {
    //             type: 'equal',
    //             arguments: ['upload', 'upload'],
    //             redirect: '/../upload'
    //         }
    //     ]
    // },
    'submit-photo': {
        legend: {
            value: 'Do you want to submit this photo?',
            className: 'visuallyhidden'
        },
        options: [{
                value: true,
                label: 'Yes, this photo meets the rules'
            },
            {
                value: false,
                label: 'No, I want to get a different photo'
            }
        ],
        validate: ['required'],
        formatter: 'boolean'
    },
    'oix-override': {
        legend: {
            value: 'Do you want to use this photo?',
            className: 'visuallyhidden'
        },
        options: [{
            value: true,
            label: 'Yes, I want to submit it',
            toggle: 'oix-override'
        }, {
            value: false,
            label: 'No, I want to get another photo'
        }],
        validate: ['required'],
        formatter: 'boolean'
    },
    'oix-override-reason': {
        labelClassName: 'visuallyhidden',
        legend: {
            className: 'visuallyhidden'
        },
        className: 'textarea',
        validate: [
            'required',
            {
                type: 'maxlength',
                arguments: 250
            }
        ],
        dependent: {
            field: 'oix-override',
            value: true
        }
    },
    // 'override': {
    //     legend: {
    //         value: 'Do you want to use this photo?',
    //         className: 'visuallyhidden'
    //     },
    //     options: [{
    //             value: 'Yes',
    //             label: 'Yes, I do'
    //         },
    //         {
    //             value: 'No',
    //             label: 'No, I dont'
    //         }
    //     ],
    //     validate: [
    //         'required',
    //         {
    //             type: 'equal',
    //             arguments: ['No', 'No'],
    //             redirect: '/../choose-photo-method'
    //         },
    //         {
    //             type: 'equal',
    //             arguments: ['No', 'Yes'],
    //             redirect: '/../question-expression'
    //         }
    //     ]
    // }
};