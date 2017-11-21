module.exports = {
    '/': {
        next: '/waiting-for-old-pass'
    },
    '/track-a-application': {
        next: '/track'
    },
    '/track': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old-pass',
        entrypoint: true
    },
    '/waiting-for-old-pass': {
        next: '/track'
    }
};
