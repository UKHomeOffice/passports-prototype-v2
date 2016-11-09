module.exports = {
    '/': {
        backLink: '../intro/you-need-a-photo-v2',
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
        backLink: './shadows-face'
    }
};
