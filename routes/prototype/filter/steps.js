module.exports = {
    '/': {
        fields: [
            'apply-uk',
            'application-country'
        ],
        backLink: '../startpage',
        next: '/first-uk',
        forks: [{
            target: '/../overseas/information/syria',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['application-country'] == 'SY'
            }
        }]
    },
    '/first-uk': {
        backLink: './',
        fields: [
            'passport-before'
        ],
        next: '/lost-stolen',
        forks: [{
            target: '/dob',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false
            }
        }],
    },
    '/you-need-a-different-service': {},
    '/lost-stolen': {
        backLink: './first-uk',
        fields: [
            'lost-stolen'
        ],
        next: '/dob',
        forks: [{
            target: '/lost',
            condition: {
                field: 'lost-stolen',
                value: true
            }
        }]
    },
    '/dob': {
        backLink: './lost-stolen',
        controller: require('../../../controllers/check-dob'),
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ],
        next: '/passport-date-of-issue',
        forks: [{
                target: '/naturalisation-registration-details',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == false
                }
            },
            // {
            //     target: '/country-birth',
            //     condition: function (req, res) {
            //         return req.session['hmpo-wizard-common']['passport-before'] == false &&
            //             req.session['hmpo-wizard-common']['application-country'] !== ''
            //     }
            // }
        ]
    },
    '/country-birth': {
        backLink: './dob',
        fields: ['country-birth'],
        next: '/../overseas/overseas-british',
        forks: [{
            target: '/../overseas/information/spain-first',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['country-birth'] == "ES"
            }
        }, {
            target: '/../overseas/information/france-first',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['country-birth'] == "FR"
            }
        }]
    },
    '/naturalisation-registration-details': {
        fields: ['naturalisation-registration-certificate'],
        next: '/dual-national'
    },
    '/lost': {},
    '/application-method': {},
    '/passport-date-of-issue': {
        backLink: './lost-stolen',
        fields: [
            'issue-day',
            'issue-month',
            'issue-year',
            'passport-issuing-authority'
        ],
        next: '/passport-damaged',
        // Issue date = 91 - 03 && Issue auth = Other && Over 16 = Yes
        // Issue date = 91 - 03 && Issue auth = HMPO && Over 16 = Yes
        // Issue date = 94 - 97 && Issue auth = HMPO && Over 16 = Yes
        // Issue date = 91 - 93 && Issue auth = Other && Over 16 = No
        // Issue date = 91 - 03 && Issue auth = Other && Over 16 = No
        forks: [{}]
    },
    '/passport-damaged': {
        controller: require('../../../controllers/check-old-blue'),
        fields: ['passport-damaged'],
        next: '/dual-national', // If they are NOT a UK Hidden FTA
        forks: [{ // If they are a UK Hidden FTA
            target: '/naturalisation-registration-details',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['old-blue'] == true;
            }
        }]
    },
    '/dual-national': {
        backLink: './passport-damaged',
        fields: ['dual-nationality'],
        next: '/summary',
        forks: [{
                target: '/british-citizen',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['application-country'] !== ''
                }
            },
            {
                target: '/../overseas/overseas-british',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['dual-nationality'] == true
                }
            }
        ]
    },
    '/british-citizen': {
        backLink: './dual-national',
        fields: ['british-citizen'],
        next: '/overseas-service',
        forks: [{
            target: '/../overseas/overseas-british',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['british-citizen'] == false
            }
        }]
    },
    '/overseas-service': {
        backLink: './british-citizen',
        fields: ['overseas-service'],
        next: '/summary',
        forks: [{
            target: '/../overseas/overseas-british',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['overseas-service'] == false
            }
        }]
    },
    '/summary': {
        backLink: './dual-national',
        next: '/../intro'
    }
};