module.exports = {
    '/': {
        //controller: require('../../../controllers/go-overseas'),
        //controller: require('../../../controllers/init'), // Initialise
        fields: [
            'apply-uk',
            'application-country'
        ],
        backLink: '../startpage',
        next: '/first-uk',
        /* if Yes is selected */
        nextAlt: 'what-do-you-want-to-do-overseas',
        /* if they are from Germany/France */
        nextAltAlt: 'what-do-you-want-to-do-overseas',
        /* if they are from Afganistan */
        nextAltAltAlt: 'what-do-you-want-to-do-overseas',
        /* if they are from Spain - first hidden as renewal */
        nextAltAltAltAlt: '../overseas-not-available' /* if they are from Syria - not available */
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
        }]
    },
    '/naturalisation-registration-details': {
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
    '/passport-date-of-issue': {
        backLink: './lost-stolen',
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
        //controller: require('../../../controllers/go-overseas'),
        fields: [
            'dual-nationality'
        ],
        next: '/summary',
        nextAlt: '../overseas'
    },
    '/summary': {
        backLink: './dual-national',
        next: '/../intro'
    }
};