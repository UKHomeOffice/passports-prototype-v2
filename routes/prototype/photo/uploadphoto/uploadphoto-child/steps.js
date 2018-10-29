module.exports = {
    '/': {},
    '/questions-intro': {
        backLink: '../../upload'
    },
    '/final-checks': {
        fields: [
            'submit-photo'
        ],
        backLink: '/questions-intro',
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
    },
    '/questions-intro-failed': {
        backLink: './not-accepted'
    },
    '/override': {
        fields: [
            'photo-override',
            'override-reason'
        ],
        backLink: './questions-intro-failed',
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