module.exports = {
    '/': {},
    '/check-and-submit-passed-photo': {
        backLink: '../retrieve'
    },
    '/check-and-submit-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        backLink: '../retrieve',
        next: '/../../apply'
    },
    '/not-accepted': {
        backLink: '../retrieve'
    },
    '/code-error': {
        backLink: '../retrieve',
    },
};