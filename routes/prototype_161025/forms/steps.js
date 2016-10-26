module.exports = {
    '/': {
        fields: ['continue'],
        next: '/continue'
    },
    '/continue': {
        backLink: './'
    },
    '/end': {}
};
