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
        // backLink: './shadows-face',
        next: '/../renew',
        forks: [{
            target: '/../renew',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true; // If they have had UK passport before
            }
        }, {
            target: '/../renew/name',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false; // If they have NOT had UK passport before
            }
        }, {
            target: '/../intro/choose-photo-method',
            condition: {
                field: 'submit-photo',
                value: 'No'
            }
        }]
    }
};