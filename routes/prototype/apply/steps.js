module.exports = {
    '/': {
        backLink: '../photo/final-checks',
        fields: [
            'passport-number',
            'expiry-day',
            'expiry-month',
            'expiry-year'
        ],
        next: '/name'
    },
    '/lost-stolen-passport': {
        backLink: '../photo/final-checks',
        fields: [
            'passport-number-lost-stolen',
            'expiry-day-lost',
            'expiry-month-lost',
            'expiry-year-lost'
        ],
        next: '/name'
    },
    '/name': {
        backLink: './',
        fields: [
            'title',
            'name',
            'lastname',
            'change-name'
        ],
        next: '/previous-names',
        forks: [{
            target: '/change-of-name',
            condition: {
                field: 'change-name',
                value: true
            }
        }, {
            target: '/you-need-a-different-service',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['change-name'] == true &&
                    req.session['hmpo-wizard-common']['16-or-older'] == false &&
                    req.session['hmpo-wizard-common']['rising-16'] == false;
            }
        }]
    },
    '/change-of-name': {
        fields: [
            'change-of-name-reason'
        ],
        next: '/previous-names'
    },
    '/you-need-a-different-service': {},
    '/previous-names': {
        fields: [
            'previous-name',
            'previous-first-name',
            'previous-last-name'
        ],
        next: '/gender'
    },
    '/gender': {
        fields: [
            'gender'
        ],
        next: '/place-of-birth'
    },
    '/place-of-birth': {
        fields: [
            'born-in-uk',
            'town-of-birth',
            'country-of-birth'
        ],
        next: '/family-intro',
        nextAlt: './home-address-overseas',
        forks: [{
            target: '/home-address-manual-prototype',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true &&
                    req.session['hmpo-wizard-common']['16-or-older'] == true &&
                    (req.session['hmpo-wizard-common']['old-blue'] == false || req.session['hmpo-wizard-common']['lost-stolen'] == true);

            }
        }, {
            target: '/parents',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true &&
                    req.session['hmpo-wizard-common']['16-or-older'] == false &&
                    (req.session['hmpo-wizard-common']['old-blue'] == false || req.session['hmpo-wizard-common']['lost-stolen'] == true);
            }
        }, {
            target: '/naturalisation-registration-details',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['naturalisation-registration-certificate'] == true;
            }
        }]
    },
    '/naturalisation-registration-details': {
        fields: [
            'naturalisation-registration-certificate-number',
            'naturalisation-registration-certificate-issue-day',
            'naturalisation-registration-certificate-issue-month',
            'naturalisation-registration-certificate-issue-year'
        ],
        next: '/family-intro'
    },
    '/family-intro': {
        next: '/parents'
    },
    '/parents': {
        controller: require('../../../controllers/validate-parents-and-check-parents-dob'),
        fields: [
            'parent1-first-names',
            'parent1-last-name',
            'parent1-age-day',
            'parent1-age-month',
            'parent1-age-year',
            'parent1-additional-information',

            'parent2-first-names',
            'parent2-last-name',
            'parent2-age-day',
            'parent2-age-month',
            'parent2-age-year',
            'parent2-additional-information',

            'parents-married',
            'marriage-day',
            'marriage-month',
            'marriage-year'
        ],
        next: '/parent-1-details'
    },
    '/parent-1-details': {
        fields: [
            'parent1-town-of-birth',
            'parent1-country-of-birth',
            'parent1-uk-passport',
            'parent1-country-of-nationality',
            'parent1-passport-number',
            'parent1-passport-issue-day',
            'parent1-passport-issue-month',
            'parent1-passport-issue-year'
        ],
        next: '/parent-2-details'
    },
    '/parent-2-details': {
        fields: [
            'parent2-town-of-birth',
            'parent2-country-of-birth',
            'parent2-uk-passport',
            'parent2-country-of-nationality',
            'parent2-passport-number',
            'parent2-passport-issue-day',
            'parent2-passport-issue-month',
            'parent2-passport-issue-year'
        ],
        next: '/grandparents-intro',
        forks: [{
                target: '/home-address-manual-prototype',
                condition: function (req, res) { // If they are Naturalisated/Registered OR Born Before 01/01/1983 OR Passport issued Before 01/01/1994 (Old blue) Hidden FTA
                    return req.session['hmpo-wizard-common']['naturalisation-registration-certificate'] == true ||
                        req.session['hmpo-wizard-common']['born-before-1983'] == true ||
                        req.session['hmpo-wizard-common']['old-blue'] == true ||
                        req.session['hmpo-wizard-common']['passport-before'] == true ||
                        req.session['hmpo-wizard-common']['lost-stolen'] == true;
                }
            }, {
                target: '/home-address-manual-prototype',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['application-for-someone-else'] == true;
                }
            }
            // ,{
            //     target: '/home-address-manual-prototype',
            //     condition: function (req, res) { // Grandparents details logic
            //         return req.session['hmpo-wizard-common']['passport-before'] === false &&
            //             (req.session['hmpo-wizard-common']['parent1-uk-passport'] === 'Yes' && req.session['hmpo-wizard-common']['parents-married'] === 'Yes') ||
            //             (req.session['hmpo-wizard-common']['parent1-uk-passport'] === 'Yes' && req.session['hmpo-wizard-common']['parent2-uk-passport'] === 'Yes')
            //     }
            // }
        ]
    },
    '/grandparents-intro': {
        next: '/parent-1-grandparents'
    },
    '/parent-1-grandparents': {
        controller: require('../../../controllers/validate-parent-1-grandparents'),
        fields: [
            'parent1-parent1-first-names',
            'parent1-parent1-last-name',
            'parent1-parent1-town-of-birth',
            'parent1-parent1-country-of-birth',
            'parent1-parent1-age-day',
            'parent1-parent1-age-month',
            'parent1-parent1-age-year',
            'parent1-parent1-additional-information',

            'parent1-parent2-first-names',
            'parent1-parent2-last-name',
            'parent1-parent2-town-of-birth',
            'parent1-parent2-country-of-birth',
            'parent1-parent2-age-day',
            'parent1-parent2-age-month',
            'parent1-parent2-age-year',
            'parent1-parent2-additional-information',

            'parent1-parents-married',
            'parent1-parents-marriage-day',
            'parent1-parents-marriage-month',
            'parent1-parents-marriage-year'
        ],
        next: '/parent-2-grandparents'
    },
    '/parent-2-grandparents': {
        controller: require('../../../controllers/validate-parent-2-grandparents'),
        fields: [
            'parent2-parent1-first-names',
            'parent2-parent1-last-name',
            'parent2-parent1-town-of-birth',
            'parent2-parent1-country-of-birth',
            'parent2-parent1-age-day',
            'parent2-parent1-age-month',
            'parent2-parent1-age-year',
            'parent2-parent1-additional-information',

            'parent2-parent2-first-names',
            'parent2-parent2-last-name',
            'parent2-parent2-town-of-birth',
            'parent2-parent2-country-of-birth',
            'parent2-parent2-age-day',
            'parent2-parent2-age-month',
            'parent2-parent2-age-year',
            'parent2-parent2-additional-information',

            'parent2-parents-married',
            'parent2-parents-marriage-day',
            'parent2-parents-marriage-month',
            'parent2-parents-marriage-year'
        ],
        next: '/home-address-manual-prototype'
    },
    '/home-address': {
        fields: [
            'postcode'
        ],
        next: '/home-address-select'
    },
    '/home-address-select': {
        next: '/contact-details'
    },
    '/home-address-manual': {
        fields: [
            'address1',
            'address2',
            'town',
            'postcode'
        ],
        backLink: './home-address-select',
        next: '/contact-details'
    },
    '/home-address-manual-prototype': {
        fields: [
            'address1',
            'address2',
            'town',
            'postcode'
        ],
        next: '/contact-details'
    },
    '/home-address-overseas': {
        fields: [
            'address1',
            'address2',
            'address3',
            'address4',
            'address5',
            'town',
            'postcode'
        ],
        next: '/contact-details-overseas'
    },
    '/contact-details': {
        fields: ['email', 'email-confirm', 'mobile'],
        next: '/get-updates'
    },
    '/contact-details-overseas': {
        fields: [
            'email',
            'application-country-code',
            'mobile-overseas'
        ],
        next: '/get-updates-overseas'
    },
    '/get-updates-overseas': {
        next: '/passport-options-overseas'
    },
    '/get-updates': {
        next: '/passport-options'
    },
    '/passport-options': {
        controller: require('../../../controllers/costs-edit-step'),
        fields: [
            'passport-options',
            'braille'
        ],
        next: '/sign',
        forks: [{
            target: '/relationship-applicant',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['applicant-age'] <= 11 &&
                    req.session['hmpo-wizard-common']['is-overseas'] === true
            }
        }, { // Overseas skip delivery page
            target: '/relationship-applicant',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['applicant-age'] <= 11 &&
                    req.session['hmpo-wizard-common']['is-overseas'] === false
            }
        }]
    },
    '/sign': {
        fields: [
            'can-sign',
            'no-sign-reason'
        ],
        next: '/who-for',
        forks: [{
            target: '/relationship-applicant',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['16-or-older'] == false &&
                    req.session['hmpo-wizard-common']['rising-16'] == false;
            }
        }]
    },
    '/who-for': {
        fields: [
            'application-for-someone-else'
        ],
        next: '/summary',
        forks: [{
            target: '/relationship-applicant',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['application-for-someone-else'] == true;
            }
        }]
    },
    '/relationship-applicant': {
        fields: [
            'relationship-applicant',
            'relationship-other'
        ],
        next: '/third-party-name',
        forks: [{ // For prototype purpose, set third-party application vars to true
            condition: function (req, res) {
                req.session['hmpo-wizard-common']['application-for-someone-else'] = true
            }
        }]
    },
    '/third-party-name': {
        fields: [
            'third-party-first-name',
            'third-party-last-name',
            'why-cant-apply'
        ],
        next: '/summary'
    },
    '/summary': {
        controller: require('../../../controllers/confirm'),
        template: 'confirm',
        next: '/documents-required',
        forks: [{ // if lost and stolen with no docs
            target: '/cost',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['lost-stolen-no-docs'] == true
            }
        }, { // if csig required
            target: '/csig-required',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false ||
                    req.session['hmpo-wizard-common']['12-or-older'] == false
            }
        }, { // For prototype purpose, set csig vars to false
            condition: function (req, res) {
                req.session['hmpo-wizard-common']['routeFromCsig'] = false
                req.session['hmpo-wizard-common']['trackWaiting'] = false
            }
        }]
    },
    '/csig-required': {
        next: '/documents-required',
        forks: [{ // if lost and stolen with no docs
            target: '/cost',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['lost-stolen-no-docs'] == true
            }
        }]
    },
    '/documents-required': {
        controller: require('../../../controllers/fetch-documents-required')
    },
    '/docs-fta': {
        controller: require('../../../controllers/check-query-string'),
        backLink: 'summary',
        next: '/passport-special-delivery',
        forks: [{
                target: '../../../csig/user/need-csig',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['routeFromCsig'] == true;
                }
            },
            {
                target: '../../../csig/user-contact/tracking-waiting',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['trackWaiting'] == true;
                }
            },
            { // if user decides to check what documents they need to send on confirmation page
                target: '/confirmation',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['tracking-status'] == 'confirm-documents';
                }
            }
        ]
    },
    '/docs-ftc': {
        controller: require('../../../controllers/check-query-string'),
        backLink: 'summary',
        next: '/passport-special-delivery',
        forks: [{
                target: '../../../csig/user/need-csig',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['routeFromCsig'] == true;
                }
            },
            {
                target: '../../../csig/user-contact/tracking-waiting',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['trackWaiting'] == true;
                }
            },
            { // if user decides to check what documents they need to send on confirmation page
                target: '/confirmation',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['tracking-status'] == 'confirm-documents';
                }
            }
        ]
    },
    '/docs-renew': {
        controller: require('../../../controllers/check-query-string'),
        backLink: 'summary',
        next: '/passport-special-delivery',
        forks: [{
                target: '../../../csig/user/need-csig',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['routeFromCsig'] == true;
                }
            },
            {
                target: '../../../csig/user-contact/tracking-waiting',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['trackWaiting'] == true;
                }
            },
            { // if user decides to check what documents they need to send on confirmation page
                target: '/confirmation',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['tracking-status'] == 'confirm-documents';
                }
            }
        ]
    },
    '/docs-renew-lost-stolen-parents': {
        controller: require('../../../controllers/check-query-string'),
        backLink: 'summary',
        fields: [
            'lost-stolen-sending-docs'
        ],
        next: '/passport-special-delivery',
        forks: [{
                target: '/cost',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['lost-stolen-sending-docs'] === false;
                }
            },
            {
                target: '../../../csig/user/need-csig',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['routeFromCsig'] == true;
                }
            },
            {
                target: '../../../csig/user-contact/tracking-waiting',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['trackWaiting'] == true;
                }
            },
            { // if user decides to check what documents they need to send on confirmation page
                target: '/confirmation',
                condition: function (req, res) {
                    return req.session['hmpo-wizard-common']['tracking-status'] == 'confirm-documents';
                }
            }
        ]
    },
    '/passport-special-delivery': {
        controller: require('../../../controllers/costs-edit-step'),
        next: '/cost',
        fields: [
            'secure-return'
        ],
    },
    '/cost': {
        controller: require('../../../controllers/confirm-cost'),
        template: 'confirm-cost',
        next: '/declaration'
    },
    '/declaration': {
        fields: ['declaration'],
        prereqs: [
            '/summary'
        ],
        next: '/payment'
    },
    '/payment': {
        next: '/processing-payment'
    },
    '/processing-payment': {
        next: '/confirmation'
    },
    '/confirmation': {
        next: '/../csig/track'
    }
};