module.exports = {
    '/': {
        next: '/dob'
    },
    '/dob': {
        controller: require('../../../controllers/check-dob'),
        next: '/upload',
        backLink: './',
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ]
    },
    '/how-to-get-a-digital-photo': {
        next: '/photo-guidance'
    },
    '/choose-photo-method': {
        next: '/photo-guidance',
        fields: [
            'choose-photo'
        ],
        forks: [{
            target: '/photo-guidance',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['choose-photo'] == 'upload';
            }
        }, {
            target: '/retrieve',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['choose-photo'] == 'code';
            }
        }]
    },
    '/photo-guidance': {
        next: '/upload',
        forks: [{ // For prototype purpose, set choose-photo method var to upload
            condition: function (req, res) {
                req.session['hmpo-wizard-common']['choose-photo'] = 'upload'
            }
        }]
    },
    '/upload': {
        controller: require('../../../controllers/check-photo-file-name'),
        next: '/processing-or-retrieving-image'
    },
    '/processing-or-retrieving-image': {},
    '/retrieve': {
        next: '/processing-or-retrieving-image',
        fields: [
            'photo-code-path'
        ]
    },
    '/fetch-photo-result': {
        controller: require('../../../controllers/fetch-photo-result')
    },
    '/check-and-submit-passed-photo': {
        next: '/../photo-checker'
    },
    '/check-and-submit-photo': {
        next: '/../photo-checker'
    },
    '/not-accepted': {
        next: '/../photo-checker'
    },
    '/code-error': {
        next: '/choose-photo-method',
        backLink: './retrieve'
    }
};