module.exports = {
    '/': {
        backLink: '../',
        next: '/processing-image'
    },
    '/uploading': {
        // backLink: './',
        next: '/prove-your-identity'
    },
    '/processing-image': {
        // backLink: './uploading'
    },
    '/questions-intro': {
        // backLink: '../intro/retrieve'
    },
    '/photo-uploaded-failure': {
        // backLink: '../upload'
    },
    '/photo-code-failure': {
        backLink: '../retrieve'
    },
    '/plain-expression': {
        fields: ['plain-expression'],
        // backLink: './photo-uploaded-failure',
        next: '/expression-need-another-photo'
    },
    '/shadows-face': {
        fields: ['shadows-face'],
        // backLink: './plain-expression',
        next: '/you-need-another-photo'
    },
    '/expression-need-another-photo': {
        // backLink: './',
        next: './'
    },
    '/you-need-another-photo': {
        next: './'
    },
    '/check-and-submit-passed-photo': {
        backLink: '../retrieve'
    },
    '/not-accepted': {
        backLink: '../retrieve'
    },
    '/check-and-submit-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        backLink: '../retrieve',
        next: '/../../apply'
    },
    '/code-error': {
        backLink: '../retrieve',
    },
};