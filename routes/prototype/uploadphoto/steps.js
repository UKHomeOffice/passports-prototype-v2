module.exports = {
    '/': {
        backLink: '../intro/you-need-a-photo',
        next: '/processing-image'
    },
    '/uploading': {
        backLink: './',
        next: '/prove-your-identity'
    },
    '/processing-image': {
        backLink: './uploading'
    },
    '/photo-uploaded-success': {
        backLink: './'
    },
    '/plain-expression': {
        fields: ['plain-expression'],
        backLink: './photo-uploaded-success',
        next: '/you-need-another-photo'
    },
    '/shadows-face': {
        fields: ['shadows-face'],
        backLink: './plain-expression',
        next: '/you-need-another-photo'
    },
    '/you-need-another-photo': {
        backLink: './shadows-face',
        next: './'
    },
    '/check-photo-and-submit': {
        fields: [
            'submit-photo'
        ],
        backLink: './photo-uploaded-success',
        next: '/../apply',
        forks: [{
                target: '/../apply',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == true; // If they have had UK passport before
                }
            }, {
                target: '/../apply/name',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == false; // If they have NOT had UK passport before
                }
            },
            // {
            //     target: '/../apply',
            //     condition: function (req, res) { // If they have had UK passport before AND NOT a Hidden FTA
            //         return req.session['hmpo-wizard-common']['passport-before'] == true
            //             && req.session['hmpo-wizard-common']['old-blue'] == false;
            //     }
            // }, {
            //     target: '/csig-required',
            //     condition: function (req, res) { // If they are an FTA OR Hidden FTA
            //         return req.session['hmpo-wizard-common']['passport-before'] == false
            //             || req.session['hmpo-wizard-common']['passport-before'] == true
            //             && req.session['hmpo-wizard-common']['old-blue'] == true;
            //     }
            // },
            {
                target: '/../photo/choose-photo-method',
                condition: {
                    field: 'submit-photo',
                    value: 'No'
                }
            }
        ]
    }
    // '/csig-required': {
    //     next: '/../apply',
    //     forks: [{
    //         target: '/../apply',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['passport-before'] == true; // If they are a Hidden FTA
    //         }
    //     }, {
    //         target: '/../apply/name',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['passport-before'] == false; // If they are a FTA
    //         }
    //     }]
    // },
    ,
    '/not-accepted': {
        backLink: '/../upload',
        next: '/../apply',
    }
};