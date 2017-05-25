module.exports = {
    '/': {
        entryPoint: true,
        template: 'index',
        next: '/verify-you'
    },
    '/verify-you': {
        next: '/details'
    },
    '/details': {
        fields: ['passport-number', 'name', 'lastname', 'age-day', 'age-month', 'age-year'],
        next: '/second-verification'
    },
    '/second-verification': {
        fields: ['verification-method'],
        controller: require('../../controllers/csig-verification'),
        next: '/nino-verification',
        nextAlt: 'other'
    },
    '/nino-verification': {
        fields: ['national-insurance'],
        next: '/person-confirmation'
    },
    '/other': {
        next: '/person-confirmation'
    },
    '/person-confirmation': {
        fields: ['person-check'],
        controller: require('../../controllers/csig-person-check'),
        next: '/submit',
        nextAlt: 'why-no'
    },
    '/why-no': {
        fields: ['reasons'],
        next: '/submit'
    },
    '/submit': {
        next: '/done'
    },
    '/done': {
        backLink: null
    }
};
