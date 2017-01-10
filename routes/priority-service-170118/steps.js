module.exports = {
    '/': {
        template: 'index',
        next: '/prices'
    },
    '/prices': {
        backLink: './'
    },
    '/what-to-take': {
        backLink: './'
    },
    '/how-to': {
        backLink: './'

    }

};
