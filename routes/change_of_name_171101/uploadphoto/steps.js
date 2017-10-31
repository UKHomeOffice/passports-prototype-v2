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
        backLink: '../upload'
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
        backLink: './photo-uploaded-success'
    }
};
