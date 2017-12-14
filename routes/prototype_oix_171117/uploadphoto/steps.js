module.exports = {
    '/': {
        backLink: '../',
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
        backLink: '../intro/get-photo-code'
    },
    '/photo-uploaded-failure': {
        backLink: '../upload'
    },
    '/photo-code-failure': {
        backLink: '../intro/get-photo-code'
    },
    '/plain-expression': {
        fields: ['plain-expression'],
        backLink: './photo-uploaded-failure',
        next: '/expression-need-another-photo'
    },
    '/shadows-face': {
        fields: ['shadows-face'],
        backLink: './plain-expression',
        next: '/you-need-another-photo'
    },
    '/expression-need-another-photo': {
        backLink: './',
        next: './'
    },
    '/you-need-another-photo': {
        backLink: './shadows-face',
        next: './'
    },
    '/happy-check-photo-and-submit': {
        backLink: '../intro/get-photo-code'
    },
    '/error-check-photo-and-submit': {
        backLink: '../intro/get-photo-code'
    },
    '/check-photo-and-submit': {
        fields: ['oix-override', 'oix-override-reason'],
        backLink: '../intro/get-photo-code',
        next: '/../renew/old-pass-details'
    }
};
