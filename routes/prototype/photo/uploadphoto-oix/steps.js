module.exports = {
    '/': {},
    '/check-and-submit-passed-photo': {
        backLink: '../retrieve',
        next: '/../../apply'
    },
    '/check-and-submit-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        backLink: '../retrieve',
        next: '/../../apply'
    },
    '/not-accepted': {
        backLink: '../retrieve',
        next: '/../choose-photo-method'
    },
    '/code-error': {
        backLink: '../retrieve',
        next: '/../retrieve'
    },
};