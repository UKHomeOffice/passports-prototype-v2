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