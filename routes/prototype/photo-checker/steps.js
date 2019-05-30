module.exports = {
    '/': {
        next: '/dob'
    },
    '/dob': {
        controller: require('../../../controllers/check-age-group'),
        next: '/upload',
        backLink: './',
        fields: [
            'age-group'
        ]
    },
    // '/how-to-get-a-digital-photo': {
    //     next: '/photo-guidance'
    // },
    // '/choose-photo-method': {
    //     next: '/photo-guidance',
    //     fields: [
    //         'choose-photo'
    //     ],
    //     forks: [{
    //         target: '/photo-guidance',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['choose-photo'] == 'upload';
    //         }
    //     }, {
    //         target: '/retrieve',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['choose-photo'] == 'code';
    //         }
    //     }]
    // },
    '/photo-guidance': {
        backLink: './upload'
        // next: '/upload',
    },
    '/upload': {
        controller: require('../../../controllers/check-photo-file-name'),
        next: '/processing-or-retrieving-image',
        forks: [{ // For prototype purpose, set choose-photo method var to upload
            condition: function (req, res) {
                req.session['hmpo-wizard-common']['choose-photo'] = 'upload'
            }
        }]
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
    '/check-and-submit-photo-variation-1': {
        next: '/../photo-checker'
    },
    '/check-and-submit-photo-variation-2': {
        next: '/../photo-checker'
    },
    '/check-and-submit-photo-variation-3': {
        next: '/../photo-checker'
    },
    '/check-and-submit-photo-variation-4': {
        next: '/../photo-checker'
    },
    '/check-and-submit-photo-variation-5': {
        next: '/../photo-checker'
    },
    '/check-and-submit-photo-variation-6': {
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