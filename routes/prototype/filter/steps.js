module.exports = {
    '/': {
        // fields: ['apply-uk', 'application-country'],
        // backLink: '../',
        next: '/live-uk',
        // controller: require('../../../controllers/is-overseas'), // Sets the country to GB if not overseas
        // forks: [{
        //     target: '/../overseas/information/syria',
        //     condition: function (req, res) {
        //         return (
        //             req.session['hmpo-wizard-common']['application-country'] == 'SY'
        //         );
        //     }
        // }]
    },
    '/live-uk': {
        fields: ['apply-uk', 'application-country'],
        backLink: '../',
        next: '/first-uk',
        controller: require('../../../controllers/is-overseas'), // Sets the country to GB if not overseas
        forks: [{
            target: '/../overseas/information/syria',
            condition: function (req, res) {
                return (
                    req.session['hmpo-wizard-common']['application-country'] == 'SY'
                );
            }
        }]
    },
    '/first-uk': {
        backLink: './',
        fields: ['passport-before'],
        next: '/lost-stolen',
        forks: [{
            target: '/dob',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false;
            }
        }]
    },
    '/you-need-a-different-service': {},
    '/lost-stolen': {
        fields: ['lost-stolen'],
        next: '/dob',
        forks: [{
            target: '/lost',
            condition: {
                field: 'lost-stolen',
                value: true
            }
        }]
    },
    '/lost': {
        fields: ['lost-reference', 'lost-stolen-reported'],
        next: '/dob'
    },
    '/dob': {
        controller: require('../../../controllers/check-dob'),
        fields: ['age-day', 'age-year', 'age-month'],
        next: '/passport-date-of-issue',
        forks: [{
                target: '/dual-national',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['lost-stolen'] == true;
                }
            },
            {
                target: '/naturalisation-registration-details',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == false;
                }
            }
            // ,{
            //     target: '/country-birth',
            //     condition: function (req, res) {
            //         return req.session['hmpo-wizard-common']['passport-before'] == false &&
            //             req.session['hmpo-wizard-common']['application-country'] !== ''
            //     }
            // }
        ]
    },
    '/country-birth': {
        fields: ['country-birth'],
        next: '/../overseas/overseas-british',
        forks: [{
                target: '/../overseas/information/spain-first',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['country-birth'] == 'Spain';
                }
            },
            {
                target: '/../overseas/information/france-first',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['country-birth'] == 'France';
                }
            }
        ]
    },
    '/naturalisation-registration-details': {
        fields: ['naturalisation-registration-certificate'],
        next: '/dual-national'
    },
    '/application-method': {},
    '/passport-date-of-issue': {
        fields: [
            'issue-day',
            'issue-month',
            'issue-year',
            'passport-issuing-authority'
        ],
        next: '/passport-damaged',
        forks: [{
            // If their passport is lost/stolen
            target: '/british-citizen',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['lost-stolen'] == true;
            }
        }]
        // Issue date = 91 - 03 && Issue auth = Other && Over 16 = Yes
        // Issue date = 91 - 03 && Issue auth = HMPO && Over 16 = Yes
        // Issue date = 94 - 97 && Issue auth = HMPO && Over 16 = Yes
        // Issue date = 91 - 93 && Issue auth = Other && Over 16 = No
        // Issue date = 91 - 03 && Issue auth = Other && Over 16 = No
    },
    '/passport-damaged': {
        controller: require('../../../controllers/app-type'),
        fields: ['passport-damaged', 'damaged-reason'],
        next: '/british-citizen', // If they are NOT a UK Hidden FTA
        forks: [{
            // If they are a UK Hidden FTA
            target: '/naturalisation-registration-details',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['old-blue'] == true;
            }
        }]
    },
    '/dual-national': {
        fields: ['dual-nationality'],
        next: '/summary',
        controller: require('../../../controllers/app-type'), // Sets the application-type to be used for the rest of the journey
        forks: [{
            target: '/summary',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'];
            }
        }]
    },
    '/british-citizen': {
        fields: ['british-citizen', 'other-nationality'],
        next: '/dual-national',
        forks: [{
            // Change of national status journey
            target: '/change-nationality',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['british-citizen'] == false;
            }
        }]
    },
    '/change-nationality': {
        // Change of national status journey
        fields: ['change-nationality'],
        next: '/naturalisation-certificate'
    },
    '/naturalisation-certificate': {
        // Change of national status journey
        fields: ['naturalisation-registration-certificate'],
        next: '/summary'
    },
    '/summary': {
        next: '/../intro'
    }
};
