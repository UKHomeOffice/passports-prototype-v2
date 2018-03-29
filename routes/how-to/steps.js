module.exports = {
    '/': {
        template: 'index',
        next: '/one'
    },
    '/one': {
        backLink: './'
    }
};
