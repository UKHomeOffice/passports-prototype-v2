module.exports = {
    '/': {},
    '/photo-uploaded-success': {
        backLink: '../../upload'
    },
    '/check-photo-and-submit': {
        fields: [
            'submit-photo'
        ],
        backLink: '/photo-uploaded-success',
        next: '../../apply',
        forks: [{
                target: '../../apply',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == true; // If they have had UK passport before
                }
            }, {
                target: '../../apply/name',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == false; // If they have NOT had UK passport before
                }
            },
            {
                target: '/../photo/choose-photo-method',
                condition: {
                    field: 'submit-photo',
                    value: false
                }
            }
        ]
    },
    '/not-accepted': {
        backLink: '../../upload'
    },
    '/questions-intro': {
        backLink: './not-accepted'
    },
    '/override': {
        fields: [
            'photo-override',
            'override-reason'
        ],
        backLink: './questions-intro',
        next: '/final-checks-override',
        forks: [{
            target: '../../upload?status=retry',
            condition: {
                field: 'photo-override',
                value: false
            }
        }]
    },
    '/final-checks-override': {
        backLink: './override',
        next: '../../apply/name'
    }
};