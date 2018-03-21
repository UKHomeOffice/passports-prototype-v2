module.exports = {
    '/': {
        next: '/track',
        fields: ['pex-reference']
    },
    '/index-alt': {
        next: '/track'
    },
    '/track-a-application': {
        next: '/track'
    },
    '/track': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old-pass',
        backLink: './'
    },
    '/waiting-for-old-pass': {
        next: '/track'
    }
    
};
