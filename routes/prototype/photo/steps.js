module.exports = {
    '/': {},
    '/digital-photo': {
        next: '/choose-photo-method'
    },
    '/choose-photo-method': {
        fields: ['choose-photo'],
        next: '/upload',
        forks: [{
            target: '/retrieve',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['choose-photo'] == 'code';
            }
        }]
    },
    '/upload': {
        next: '/processing-image',
        controller: require('../../../controllers/check-query-string'),
        forks: [{
            target: '/../photo/upload-errors',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['status'] == 'retry'
            }
        }]
    },
    '/processing-image': {
        backLink: './upload',
    },
    '/retrieve': {
        fields: ['photo-code-path'],
        backLink: './choose-photo-method',
        next: '/retrieving-image'
    },
    '/retrieving-image': {
        backLink: './retrieve',
    },
    '/fetch-result': {
        controller: require('../../../controllers/fetch-result')
    },
    '/check-and-submit-passed-photo': {
        backLink: './retrieve',
        next: '/../apply'
    },
    '/check-and-submit-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        backLink: './retrieve',
        next: '/../apply'
    },
    '/not-accepted': {
        backLink: './retrieve',
        next: '/choose-photo-method'
    },
    '/code-error': {
        backLink: './retrieve',
        next: '/retrieve'
    }
};
