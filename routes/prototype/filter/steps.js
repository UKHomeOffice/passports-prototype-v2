module.exports = {
    '/': {
        backLink: '../',
        next: '/live-uk',
    },
    '/help-or-feedback': {
        backLink: './',
        next:'/phase-banner-feedback-page',
        fields: [
            'help-feedback'
        ],
    },
    '/phase-banner-feedback-page': {
        next: '/ '
    },
    '/live-uk': {
        fields: [
            'apply-uk',
            'application-country'
        ],
        backLink: './',
        next: '/../intro',
        controller: require('../../../controllers/is-overseas'), // Sets the country to GB if not overseas
        forks: [{
            target: '/../overseas/information/syria',
            condition: function (req, res) {
                return (
                    req.session['hmpo-wizard-common']['application-country'] == 'Syria'
                );
            }
        }]
    },
    '/first-uk': {
        fields: [
            'passport-before'
        ],
        next: '/lost-stolen',
        forks: [{
            target: '/naturalisation-registration-details',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false;
            }
        }, {
            target: '/country-birth',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false &&
                    req.session['hmpo-wizard-common']['application-country'] == 'Afghanistan'
            }
        }]
    },
    '/you-need-a-different-service': {},
    '/lost-stolen': {
        fields: [
            'lost-stolen'
        ],
        next: '/passport-date-of-issue',
        forks: [{
            target: '/lost',
            condition: {
                field: 'lost-stolen',
                value: true
            }
        }, {
            target: '/dual-national',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['lost-stolen'] == true;
            }
        }]
    },
    '/lost': {
        fields: [
            'lost-reference',
            'lost-stolen-reported'
        ],
        next: '/passport-date-of-issue'
    },
    // '/dob': {
    //     controller: require('../../../controllers/check-dob'),
    //     fields: ['age-day', 'age-year', 'age-month'],
    //     next: '/passport-date-of-issue',
    //     forks: [{
    //             target: '/dual-national',
    //             condition: function (req, res) {
    //                 return req.session['hmpo-wizard-common']['lost-stolen'] == true;
    //             }
    //         },
    //         {
    //             target: '/naturalisation-registration-details',
    //             condition: function (req, res) {
    //                 return req.session['hmpo-wizard-common']['passport-before'] == false;
    //             }
    //         },
    //         {
    //             target: '/country-birth',
    //             condition: function (req, res) {
    //                 return req.session['hmpo-wizard-common']['passport-before'] == false &&
    //                     req.session['hmpo-wizard-common']['application-country'] == 'Afghanistan'
    //             }
    //         }
    //     ]
    // },
    '/country-birth': {
        fields: [
            'country-birth'
        ],
        //next: '/../overseas/overseas-british',
        next: '/summary',
        forks: [{
            //         target: '/../overseas/information/spain-first',
            //         condition: function (req, res) {
            //             return req.session['hmpo-wizard-common']['country-birth'] == 'ES';
            //         }
            //     },
            //     {
            //         target: '/../overseas/information/france-first',
            //         condition: function (req, res) {
            //             return req.session['hmpo-wizard-common']['country-birth'] == 'FR';
            //         }
            //     },
            //     {
            target: '/../overseas/information/afghanistan',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['application-country'] == 'Afghanistan';
            }
        }]
    },
    '/naturalisation-registration-details': {
        fields: [
            'naturalisation-registration-certificate'
        ],
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
            },
            target: '/../overseas/information/afghanistan',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['application-country'] == 'Afghanistan'
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
        fields: [
            'passport-damaged',
            'damaged-reason'
        ],
        next: '/dual-national', // If they are NOT a UK Hidden FTA
        forks: [{
            // If they are a UK Hidden FTA
            target: '/naturalisation-registration-details',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['old-blue'] == true;
            }
        }]
    },
    '/dual-national': {
        fields: [
            'dual-nationality'
        ],
        next: '/summary',
        controller: require('../../../controllers/app-type.js'), // Sets the application-type to be used for the rest of the journey
        forks: [{
                target: '/british-citizen',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] === true &&
                        req.session['hmpo-wizard-common']['is-overseas'] === true
                }
            },
            {
                target: '/country-birth',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['passport-before'] == false &&
                        req.session['hmpo-wizard-common']['application-country'] !== 'GB'
                }
            }
        ]
    },

    '/british-citizen': {
        fields: [
            'british-citizen'
        ],
        next: '/summary',
        //    forks: [{
        //        target: '/../overseas/overseas-british',
        //        condition: function (req, res) {
        //            return req.session['hmpo-wizard-common']['british-citizen'] == 'Other'
        //        }
        //    }]
    },

    // '/change-nationality': {
    //     // Change of national status journey
    //     fields: ['change-nationality'],
    //     next: '/naturalisation-certificate'
    // },
    // '/naturalisation-certificate': {
    //     // Change of national status journey
    //     fields: ['naturalisation-registration-certificate'],
    //     next: '/summary'
    //},
    '/summary': {
        next: '/../intro/what-you-need',
        forks: [{
            target: '/../apply',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true; // If they have had UK passport before
            }
        }, {
            target: '/../apply/lost-stolen-passport',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['lost-stolen'] == true; // If their passport is lost/stolen
            }
        }, {
            target: '/../apply/name',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false; // If they have NOT had UK passport before
            }
        }, {
            target: '/../intro/what-you-need',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false ||
                    req.session['hmpo-wizard-common']['old-blue'] == true ||
                    (req.session['hmpo-wizard-common']['lost-stolen'] == true && req.session['hmpo-wizard-common']['16-or-older'] == false)
            }
        }, {
            target: '/../intro/what-you-need',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true &&
                    req.session['hmpo-wizard-common']['16-or-older'] == false
            }
        }]
    }
};
