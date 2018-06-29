module.exports = {
    '/': {
        //controller: require('../../../controllers/init'), // Initialise
        // controller: require('../../../controllers/go-overseas'),
        fields: [
            'apply-uk',
            'application-country'
        ],
        backLink: '../startpage',
        next: '/who-for',
        /* if Yes is selected */
        nextAlt: 'what-do-you-want-to-do-overseas',
        /* if they are from Germany/France */
        nextAltAlt: 'what-do-you-want-to-do-overseas',
        /* if they are from Afganistan */
        nextAltAltAlt: 'what-do-you-want-to-do-overseas',
        /* if they are from Spain - first hidden as renewal */
        nextAltAltAltAlt: '../overseas-not-available' /* if they are from Syria - not available */
    },
    '/who-for': {
        backLink: './',
        fields: [
            'application-for'
        ],
        next: '/first-uk'
    },
    '/first-uk': {
        backLink: '/who-for',
        fields: [
            'passport-before'
        ],
        next: '/lost-stolen',
        forks: [{
            target: '/dob',
            condition: {
                field: 'passport-before',
                value: false
            }
        }]
    },
    '/lost-stolen': {
        fields: [
            'lost-stolen'
        ],
        next: '/passport-colour',
        forks: [{
            target: '/dob',
            condition: {
                field: 'lost-stolen',
                value: false
            }
        }]
    },
    '/passport-colour': {
        backLink: './',
        fields: [
            'passport-colour'
        ],
        next: '/naturalisation-registration-details',
        forks: [{
            target: '/lost',
            condition: {
                field: 'passport-colour',
                value: 'red'
            }
        }]
    },
    '/naturalisation-registration-details': {
        controller: require('../../../controllers/check-naturalisation-registration'),
        fields: [
            'naturalisation-registration-certificate'
        ],
        next: '/dual-national'
    },
    '/what-do-you-want-to-do': {
        fields: [
            'what-to-do'
        ],
        backLink: './',
        next: '/dob'
    },
    '/lost': {},
    '/application-method': {},
    '/what-do-you-want-to-do-overseas': {
        controller: require('../../../controllers/go-overseas'),
        fields: [
            'what-to-do-overseas'
        ],
        backLink: './',
        next: '/dob',
        nextAlt: 'dob-overseas',
        /* if they are from Germany/France */
        nextAltAlt: 'dob-overseas',
        /* if they are from Afganistan */
        nextAltAltAlt: '../overseas-first' /* if they are from Spain - first hidden as renewal */
    },
    '/dob-overseas': {
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ],
        controller: require('../../../controllers/go-overseas'),
        backLink: './',
        next: '/../filter',
        /* if they are from the UK */
        nextAlt: '../overseas',
        /* if they are from Germany/France */
        nextAltAlt: '../overseas-not-eligible',
        /* if they are from Afganistan */
    },
    '/dob': {
        //controller: require('../../../controllers/go-overseas'),
        controller: require('../../../controllers/check-dob'),
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ],
        next: '/passport-date-of-issue',
        forks: [
            {
                target: '/naturalisation-registration-details',
                condition: function (req, res) {
                    // TODO: Add conditional logic for OVER 16
                    return req.session['hmpo-wizard-common']['passport-before'] == false; // If they have NOT had UK passport before
                }
            }
        ]
    },
    // '/dob-below-16': {
    //     fields: [
    //         'age-day',
    //         'age-year',
    //         'age-month'
    //     ],
    //     backLink: './dob',
    //     next: '/passport-date-of-issue',
    //     forks: [{
    //         target: '/summary',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['passport-before'] == false; // If they are BELOW 16 + NOT had UK passport before
    //         }
    //     }]
    // },
    '/passport-date-of-issue': {
        fields: [
            'issue-day',
            'issue-month',
            'issue-year'
        ],
        next: '/passport-damaged'
    },
    '/passport-damaged': {
        controller: require('../../../controllers/check-old-blue'),
        fields: [
            'passport-damaged'
        ],
        next: '/dual-national', // If they are NOT a UK Hidden FTA
        forks: [{ // If they are a UK Hidden FTA
            target: '/naturalisation-registration-details',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['old-blue'] == true;
            }
        }]
    },
    '/dual-national': {
        controller: require('../../../controllers/go-overseas'),
        fields: [
            'dual-nationality'
        ],
        next: '/summary',
        nextAlt: '../overseas',
        forks: [{
            target: '/relationship-applicant',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['application-for'] == false;
            }
        }],
    },
    '/relationship-applicant': {
        fields: [
            'relationship-applicant',
            'other-why-apply'
        ],
        backLink: './dual-national',
        next: '/third-party-name',
        controller: require('../../../controllers/third-parties'),
    },
    '/third-party-name': {
        fields: [
            'third-party-first-name',
            'third-party-last-name'
        ],
        backLink: './relationship-applicant',
        next: '/parental-responsibility',
        forks: [{
            target: '/summary',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['16-or-older'] == true;
            }
        }],
    },
    '/parental-responsibility': {
        fields: [
            'parental-responsibility'
        ],
        backLink: './relationship-applicant',
        next: '/summary'
    },
    '/summary': {
        next: '/../intro'
    }
};
