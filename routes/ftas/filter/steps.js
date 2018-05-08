module.exports = {
    '/': {
        fields: [
            'apply-uk',
            'application-country'
        ],
        controller: require('../../../controllers/go-overseas'),
        backLink: './',
        next: '/apply-uk',  /* if Yes is selected */
        nextAlt: 'what-do-you-want-to-do-overseas', /* if they are from Germany/France */
        nextAltAlt: 'what-do-you-want-to-do-overseas',  /* if they are from Afganistan */
        nextAltAltAlt: 'what-do-you-want-to-do-overseas',   /* if they are from Spain - first hidden as renewal */
        nextAltAltAltAlt: '../overseas-not-available'   /* if they are from Syria - not available */
    },
    '/apply-uk': {
        fields: [
            'application-for'
        ],
        next: '/first-uk',
        backLink: '../startpage'
    },
    '/first-uk': {
        backLink: './',
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
        next: '/dob',
        forks: [{
            target: '/lost',
            condition: {
                field: 'passport-colour',
                value: 'red'
            }
        }]
    },
    '/what-do-you-want-to-do': {
        fields: [
            'what-to-do'
        ],
        backLink: './',
        next: '/dob'
    },
    '/lost': {
    },
    '/application-method': {
    },
    '/what-do-you-want-to-do-overseas': {
        controller: require('../../../controllers/go-overseas'),
        fields: [
            'what-to-do-overseas'
        ],
        backLink: './',
        next: '/dob',
        nextAlt: 'dob-overseas',    /* if they are from Germany/France */
        nextAltAlt: 'dob-overseas', /* if they are from Afganistan */
        nextAltAltAlt: '../overseas-first'  /* if they are from Spain - first hidden as renewal */
    },
    '/dob-overseas': {
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ],
        controller: require('../../../controllers/go-overseas'),
        backLink: './',
        next: '/../filter', /* if they are from the UK */
        nextAlt: '../overseas', /* if they are from Germany/France */
        nextAltAlt: '../overseas-not-eligible', /* if they are from Afganistan */
    },
    '/dob': {
        fields: [
            '16-or-older'
        ],
        controller: require('../../../controllers/go-overseas'),
        backLink: './lost-stolen',
        next: '/passport-expiry',   /* if they are from the UK */
        forks: [{
            target: '/dob-below-16',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['16-or-older'] == false;   /* If they are BELOW 16 */
            }
        }, {
            target: '/dual-national',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['16-or-older'] == true && req.session['hmpo-wizard-common']['passport-before'] == false;   /* If they are OVER 16 + NOT had UK passport before */
            }
        }]
    },
    '/dob-below-16': {
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ],
        backLink: './dob',
        next: '/passport-expiry',
        forks: [{
            target: '/../intro',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false;   /* If they are BELOW 16 + NOT had UK passport before */
            }
        }]
    },
    '/passport-expiry': {
        fields: [
            'issue-day',
            'issue-year',
            'issue-month'
        ],
        backLink: '../filter/dob',
        next: '/dual-national'
    },
    '/dual-national': {
        backLink: '../filter/passport-expiry',
        next: '/../intro'
    },
    '/passport-damaged': {
        fields: [
            'passport-damaged'
        ],
        backLink: './',
        next: '/../intro'   /* If their passport is NOT damaged */
    },
    '/uncancelled': {
        controller: require('../../../controllers/go-overseas'),
        fields: [
            'uncancelled'
        ],
        backLink: './passport-damaged',
        next: '/../intro',
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
            'relationship-applicant'
        ],
        backLink: './uncancelled',
        next: '/../intro',
        nextAlt: 'parental-responsibility',
        //controller: require('../../../controllers/applicant-relationship'),
        forks: [{
            target: '/third-party-name',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['relationship-applicant'] == "Other" && req.session['hmpo-wizard-common']['16-or-older'] == true;
            }
        }, {
            target: '/parental-responsibility',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['16-or-older'] == false;
            }
        }],
    },
    '/relationship-applicant-other': {
        fields: [
            'relationship-applicant-other'
        ],
        backLink: './relationship-applicant',
        next: '/../intro',
        forks: [{
            target: '/parental-responsibility',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['16-or-older'] == false;
            }
        }],
    },
    '/parental-responsibility': {
        fields: [
            'parental-responsibility'
        ],
        backLink: './relationship-applicant',
        next: '/../intro',
        controller: require('../../../controllers/parental-responsibility'),
        nextAlt: 'third-party-name'
    },
    '/parental-responsibility-no': {
        backLink: './parental-responsibility'
    },
    '/third-party-name': {
        fields: [
            'third-party-first-name',
            'third-party-last-name'
        ],
        backLink: './parental-responsibility',
        next: '/../intro'
    }
};