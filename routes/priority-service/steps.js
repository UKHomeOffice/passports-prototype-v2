module.exports = {
    '/': {
        template: 'index',
        next: '/what-to-take'
    },
    '/what-to-take': {
        backLink: './'
    }
};
