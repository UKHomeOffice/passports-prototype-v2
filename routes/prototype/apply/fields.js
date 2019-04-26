const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
    'passport-number': {
        labelClassName: 'visuallyhidden',
        validate: [
            'required'
        ]
    },
    'passport-number-lost-stolen': {
        labelClassName: 'visuallyhidden',
    },
    'application-country': {
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.id,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        })),
        validate: [
            'required'
        ],
        dependent: {
            field: 'apply-uk',
            value: false
        }
    },
    'can-sign': {
        legend: {
            className: 'visuallyhidden'
        },
        formatter: 'boolean',
        validate: ['required'],
        options: [{
                value: true,
                label: '{{> partials-sar-sign-passport-yes}}',
            },
            {
                value: false,
                label: '{{> partials-sar-sign-passport-no}}',
                toggle: 'no-sign'
            }
        ]
    },
    'no-sign-reason': {
        labelClassName: 'visuallyhidden',
        legend: {
            className: 'visuallyhidden'
        },
        className: 'textarea',
        validate: [
            'required',
            {
                type: 'maxlength',
                arguments: 250
            }
        ],
        dependent: {
            field: 'can-sign',
            value: false
        }
    },
    'age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'title': {
        legend: {
            value: 'Your title',
            className: 'visuallyhidden'
        },
        options: [{
            value: 'Mr',
            label: 'Mr'
        }, {
            value: 'Mrs',
            label: 'Mrs'
        }, {
            value: 'Master',
            label: 'Master'
        }, {
            value: 'Miss',
            label: 'Miss'
        }, {
            value: 'Ms',
            label: 'Ms'
        }, {
            value: 'Other',
            label: 'Other',
            toggle: 'other-titles'
        }],
        validate: [
            'required'
        ]
    },
    'name': {
        validate: [
            'required',
            {
                type: 'regex',
                arguments: /^[A-Za-z .'-]+$/
            }
        ]
    },
    'lastname': {
        validate: [
            'required',
            {
                type: 'regex',
                arguments: /^[A-Za-z .'-]+$/
            }
        ]
    },
    'change-name': {
        legend: {
            className: 'visuallyhidden'
        },
        options: [{
                value: false,
                label: 'Yes'
            },
            {
                value: true,
                label: 'No, {{> partials-applicant-my-their}} name has changed'
            }
        ],
        formatter: ['boolean'],
        validate: [
            'required'
        ]
    },
    'change-of-name-reason': {
        legend: {
            value: 'Your title',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Marriage-or-civil-partnership',
                label: 'Marriage or civil partnership'
            },
            {
                value: 'Divorce-or-dissolution',
                label: 'Divorce or dissolution'
            },
            {
                value: 'Gender-transition',
                label: 'Gender transition'
            },
            {
                value: 'I-changed-my-name-another-way',
                label: 'I changed my name another way'
            }
        ],
        validate: [
            'required'
        ]
    },
    'previous-name': {
        formatter: ['boolean'],
        validate: [
            'required'
        ],
        legend: {
            className: 'visually-hidden'
        },
        className: 'inline',
        options: [{
                value: true,
                label: 'Yes',
                toggle: 'previous-names'
            },
            {
                value: false,
                label: 'No'
            }
        ]
    },
    'previous-last-name': {},
    'previous-first-name': {},
    'gender': {
        validate: [
            'required'
        ],
        legend: {
            value: 'Your gender',
            className: 'visuallyhidden'
        },
        className: "inline",
        options: [{
                value: 'F',
                label: 'Female'
            },
            {
                value: 'M',
                label: 'Male'
            }
        ]
    },
    'town-of-birth': {
        labelClassName: 'visuallyhidden',
        legend: {
            className: 'visuallyhidden'
        },
        validate: [
            'required'
        ]
    },
    'born-in-uk': {
        formatter: 'boolean',
        validate: 'required',
        legend: {
            value: 'Were you born in the UK?',
            className: 'visuallyhidden'
        },
        options: [{
                value: true,
                label: 'Yes'
            },
            {
                value: false,
                label: 'No',
                toggle: 'birth-country'
            }
        ],
        className: 'inline'
    },
    'naturalisation-registration-certificate-number': {
        validate: [
            'required'
        ]
    },
    'naturalisation-registration-certificate-issue-day': {
        labelClassName: 'form-label',
        validate: [
            'required'
        ]
    },
    'naturalisation-registration-certificate-issue-month': {
        labelClassName: 'form-label',
        validate: [
            'required'
        ]
    },
    'naturalisation-registration-certificate-issue-year': {
        labelClassName: 'form-label',
        validate: [
            'required'
        ]
    },
    'country-of-birth': {
        dependent: {
            field: 'born-in-uk',
            value: false
        },
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'expiry-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'expiry-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'expiry-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'expiry-year-lost': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric'
        ]
    },
    'expiry-month-lost': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric'
        ]
    },
    'expiry-day-lost': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric'

        ]
    },
    'parents-married': {
        legend: {
            value: 'Parents married',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'marriage-date'
            },
            {
                value: 'No',
                label: 'No'
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        validate: [
            'required'
        ],
        className: 'inline'
    },

    // Parents
    'marriage-day': {
        labelClassName: 'form-label',
    },
    'marriage-year': {
        labelClassName: 'form-label',
    },
    'marriage-month': {
        labelClassName: 'form-label',
    },

    // Parent 1
    'parent1-first-names': {
        labelClassName: 'form-label'

    },
    'parent1-last-name': {
        labelClassName: 'form-label'

    },
    'parent1-country-of-birth': {
        labelClassName: 'visuallyhidden',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent1-age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-country-of-nationality': {
        labelClassName: 'form-label-bold'
    },
    'parent1-uk-passport': {
        validate: 'required',
        legend: {
            value: 'Do they have a UK passport?',
            className: 'form-label-bold'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'parent1-uk-passport'
            },
            {
                value: 'No',
                label: 'No'
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        className: 'inline'
    },
    'parent1-passport-number': {
        labelClassName: 'visuallyhidden',
        // validate: [
        //   'required'
        // ]
    },
    'parent1-passport-issue-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-passport-issue-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-passport-issue-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-additional-information': {
        className: 'textarea',
        labelClassName: 'form-label-bold',
        // validate: [
        //     'required',
        //     {
        //         type: 'equal',
        //         validate: [ // If ANY of the fields are NOT filled in
        //             'parent1-first-names',
        //             'parent1-last-name',
        //             'parents-married',
        //             'parent1-age-day',
        //             'parent1-age-month',
        //             'parent1-age-year'
        //         ],
        //         toggle: 'parent1-additional-information'
        //     }
        // ]
    },
    'parent1-euss': {
        validate: 'required',
        legend: {
            value: 'Did they have EU settled status at the time of the applicant’s birth?',
            className: 'form-label-bold'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'parent1-euss'
            },
            {
                value: 'No',
                label: 'No',
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        className: 'inline'
    },
    'parent1-euss-reference-number': {
        validate: 'required',
        legend: {
            value: 'Which reference number do you want to give?',
            className: 'form-label-bold'
        },
        options: [{
                value: 'document-reference-number',
                label: 'Document reference number',
            },
            {
                value: 'application-reference-number',
                label: 'Application reference number',
            },
        ],
    },
    'parent1-euss-document-reference-number': {
        labelClassName: 'form-label-bold'
    },
    'parent1-euss-application-reference-number': {
        labelClassName: 'form-label-bold'
    },

    // Parent 2
    'parent2-first-names': {
        labelClassName: 'form-label'
    },
    'parent2-last-name': {
        labelClassName: 'form-label'

    },
    'parent2-country-of-birth': {
        labelClassName: 'visuallyhidden',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent2-age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-country-of-nationality': {
        labelClassName: 'form-label-bold'
    },
    'parent2-uk-passport': {
        validate: 'required',
        legend: {
            value: 'Do they have a UK passport?',
            className: 'form-label-bold'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'parent2-uk-passport'
            },
            {
                value: 'No',
                label: 'No'
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        className: 'inline'
    },
    'parent2-passport-number': {
        labelClassName: 'visuallyhidden',
        // validate: [
        //   'required'
        // ]
    },
    'parent2-passport-issue-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-passport-issue-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-passport-issue-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-additional-information': {
        className: 'textarea',
        labelClassName: 'form-label-bold'
        // validate: [
        //   'required',
        //   { type: 'maxlength', arguments: 250 }
        // ],
        // dependent: {
        //   field: 'can-sign',
        //   value: false
        // }
    },

    'parent2-euss': {
        validate: 'required',
        legend: {
            value: 'Did they have EU settled status at the time of the applicant’s birth?',
            className: 'form-label-bold'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'parent2-euss'
            },
            {
                value: 'No',
                label: 'No',
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        className: 'inline'
    },

    'parent2-euss-reference-number': {
        validate: 'required',
        legend: {
            value: 'Which reference number do you want to give?',
            className: 'form-label-bold'
        },
        options: [{
                value: 'document-reference-number',
                label: 'Document reference number',
            },
            {
                value: 'application-reference-number',
                label: 'Application reference number',
            },
        ],
    },
    'parent2-euss-document-reference-number': {
        labelClassName: 'form-label-bold'
    },
    'parent2-euss-application-reference-number': {
        labelClassName: 'form-label-bold'
    },

    // Parent 1's parents
    'parent1-parents-married': {
        legend: {
            value: 'Parents married',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'marriage-date'
            },
            {
                value: 'No',
                label: 'No'
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        validate: [
            'required'
        ],
        className: 'inline'
    },
    'parent1-parents-marriage-day': {
        labelClassName: 'form-label',
    },
    'parent1-parents-marriage-year': {
        labelClassName: 'form-label',
    },
    'parent1-parents-marriage-month': {
        labelClassName: 'form-label',
    },

    // Parent 1's parent 1
    'parent1-parent1-first-names': {
        labelClassName: 'form-label'

    },
    'parent1-parent1-last-name': {
        labelClassName: 'form-label'

    },
    'parent1-parent1-town-of-birth': {
        labelClassName: 'form-label'

    },
    'parent1-parent1-country-of-birth': {
        labelClassName: 'form-label',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent1-parent1-age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-parent1-age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-parent1-age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-parent1-country-of-nationality': {
        labelClassName: 'visuallyhidden',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent1-parent1-passport-number': {
        labelClassName: 'visuallyhidden',
        // validate: [
        //   'required'
        // ]
    },
    'parent1-parent1-passport-issue-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-parent1-passport-issue-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-parent1-passport-issue-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-parent1-additional-information': {
        className: 'textarea',
        labelClassName: 'form-label-bold'
        // validate: [
        //   'required',
        //   { type: 'maxlength', arguments: 250 }
        // ],
        // dependent: {
        //   field: 'can-sign',
        //   value: false
        // }
    },

    // Parent 1's parent 2
    'parent1-parent2-first-names': {
        labelClassName: 'form-label'

    },
    'parent1-parent2-last-name': {
        labelClassName: 'form-label'

    },
    'parent1-parent2-town-of-birth': {
        labelClassName: 'form-label'

    },
    'parent1-parent2-country-of-birth': {
        labelClassName: 'form-label',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent1-parent2-age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-parent2-age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-parent2-age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent1-parent2-country-of-nationality': {
        labelClassName: 'visuallyhidden',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent1-parent2-passport-number': {
        labelClassName: 'visuallyhidden',
        // validate: [
        //   'required'
        // ]
    },
    'parent1-parent2-passport-issue-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-parent2-passport-issue-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-parent2-passport-issue-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent1-parent2-additional-information': {
        className: 'textarea',
        labelClassName: 'form-label-bold'
        // validate: [
        //   'required',
        //   { type: 'maxlength', arguments: 250 }
        // ],
        // dependent: {
        //   field: 'can-sign',
        //   value: false
        // }
    },

    // Parent 2's parents
    'parent2-parents-married': {
        legend: {
            value: 'Parents married',
            className: 'visuallyhidden'
        },
        options: [{
                value: 'Yes',
                label: 'Yes',
                toggle: 'marriage-date'
            },
            {
                value: 'No',
                label: 'No'
            },
            {
                value: 'Unknown',
                label: 'I don’t know'
            }
        ],
        validate: [
            'required'
        ],
        className: 'inline'
    },
    'parent2-parents-marriage-day': {
        labelClassName: 'form-label',
    },
    'parent2-parents-marriage-year': {
        labelClassName: 'form-label',
    },
    'parent2-parents-marriage-month': {
        labelClassName: 'form-label',
    },

    // Parent 2's parent 1
    'parent2-parent1-first-names': {
        labelClassName: 'form-label'

    },
    'parent2-parent1-last-name': {
        labelClassName: 'form-label'

    },
    'parent2-parent1-town-of-birth': {
        labelClassName: 'form-label'

    },
    'parent2-parent1-country-of-birth': {
        labelClassName: 'form-label',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent2-parent1-age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-parent1-age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-parent1-age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-parent1-country-of-nationality': {
        labelClassName: 'visuallyhidden',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent2-parent1-passport-number': {
        labelClassName: 'visuallyhidden',
        // validate: [
        //   'required'
        // ]
    },
    'parent2-parent1-passport-issue-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-parent1-passport-issue-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-parent1-passport-issue-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-parent1-additional-information': {
        className: 'textarea',
        labelClassName: 'form-label-bold'
        // validate: [
        //   'required',
        //   { type: 'maxlength', arguments: 250 }
        // ],
        // dependent: {
        //   field: 'can-sign',
        //   value: false
        // }
    },

    // Parent 2's parent 2
    'parent2-parent2-first-names': {
        labelClassName: 'form-label'

    },
    'parent2-parent2-last-name': {
        labelClassName: 'form-label'

    },
    'parent2-parent2-town-of-birth': {
        labelClassName: 'form-label'

    },
    'parent2-parent2-country-of-birth': {
        labelClassName: 'form-label',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent2-parent2-age-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-parent2-age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-parent2-age-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //   'numeric',
        //   'required'
        // ]
    },
    'parent2-parent2-country-of-nationality': {
        labelClassName: 'visuallyhidden',
        options: [{
            value: '',
            label: ' '
        }].concat(_.map(countries, function (c) {
            return {
                value: c.displayName,
                label: c.displayName,
                attributes: [{
                    attribute: 'data-synonyms',
                    value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
                }]
            }
        }))
    },
    'parent2-parent2-passport-number': {
        labelClassName: 'visuallyhidden',
        // validate: [
        //   'required'
        // ]
    },
    'parent2-parent2-passport-issue-year': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-parent2-passport-issue-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-parent2-passport-issue-day': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        // validate: [
        //     'numeric',
        //     'required'
        // ]
    },
    'parent2-parent2-additional-information': {
        className: 'textarea',
        labelClassName: 'form-label-bold'
        // validate: [
        //   'required',
        //   { type: 'maxlength', arguments: 250 }
        // ],
        // dependent: {
        //   field: 'can-sign',
        //   value: false
        // }
    },


    'address1': {
        validate: [
            'required'
        ]
    },
    'address2': {
        labelClassName: 'visuallyhidden',
        formatter: 'removehyphens'
    },
    'town': {
        validate: [
            'required'
        ]
    },
    'postcode': {
        validate: [
            'required'
        ]
    },
    'email': {
        validate: [
            'required'
        ]
    },
    'email-confirm': {
        validate: [
            'required'
        ]
    },
    'country-code': {
        labelClassName: 'visuallyhidden',
        formatter: 'removehyphens',
        validate: [
            'required'
        ]
    },
    'application-country-code': {
        labelClassName: 'visuallyhidden',
        formatter: 'removehyphens',
        validate: [
            'required'
        ]
    },
    'mobile': {
        labelClassName: 'visuallyhidden',
        validate: [
            'required'
        ]
    },
    'mobile-overseas': {
        labelClassName: 'visuallyhidden',
        validate: [
            'numeric',
            'required'
        ]
    },
    'can-interview': {
        legend: {
            className: 'visuallyhidden'
        },
        formatter: 'boolean',
        validate: [
            'required'
        ],
        options: [{
                value: true,
                label: 'I can attend an interview',
            },
            {
                value: false,
                label: 'I have a disability and can’t attend',
                toggle: 'no-interview'
            }
        ]
    },
    'no-interview-reason': {
        labelClassName: 'visuallyhidden',
        legend: {
            className: 'visuallyhidden'
        },
        className: 'textarea',
        validate: [
            'required',
            {
                type: 'maxlength',
                arguments: 250
            }
        ],
        dependent: {
            field: 'can-interview',
            value: false
        }
    },
    'passport-options': {
        legend: {
            value: 'Passport size'
        },
        options: [{
                value: '34',
                label: 'Standard 34-page passport (£75.50)'
            },
            {
                value: '50',
                label: 'Jumbo 50-page passport (£85.50)'
            }
        ],
        validate: [
            'required'
        ]
    },
    'passport-size': {
        formatter: 'boolean',
        validate: 'required',
        legend: {
            value: 'What size passport would you like?',
            className: 'form-label'
        },
        options: [{
                value: false,
                label: '32-page passport (free)'
            },
            {
                value: true,
                label: '48-page passport ({{#currency}}{{largePassportCost}}{{/currency}})'
            }
        ],
        dependent: {
            field: 'passport-size-dependent',
            value: 'true'
        }
    },
    'passport-options-overseas': {
        legend: {
            value: 'Passport size'
        },
        options: [{
                value: '32',
                label: 'Standard adult 32-page passport (£83)'
            },
            {
                value: '48',
                label: 'Jumbo adult 48-page passport (£91)'
            }
        ],
        validate: [
            'required'
        ]
    },
    braille: {
        formatter: 'boolean-strict',
        legend: {
            value: 'Add a Braille sticker'
        },
    },
    'secure-return': {
        formatter: 'boolean',
        validate: 'required',
        legend: {
            value: '',
            className: 'form-label-bold'
        },
        options: [{
                value: true,
                label: 'Secure delivery (£5 extra)'
            },
            {
                value: false,
                label: 'Standard post (free)'
            }
        ]
    },
    'application-for-someone-else': {
        legend: {
            value: 'Who is the new passport for?',
            className: 'visuallyhidden'
        },
        options: [{
                value: false,
                label: 'Me'
            },
            {
                value: true,
                label: 'Someone else',
                toggle: 'someone-else'
            },
        ],
        formatter: [
            'boolean'
        ],
        validate: [
            'required'
        ],
        className: 'inline'
    },
    'relationship-applicant': {
        legend: {
            value: 'What is your relationship to the applicant?',
            className: 'visuallyhidden'
        },
        className: 'inline',
        options: [{
                value: 'Mother',
                label: 'Mother'
            },
            {
                value: 'Father',
                label: 'Father'
            },
            {
                value: 'Other',
                label: 'Other',
                toggle: "relationship-other"
            }
        ],
        validate: [
            'required'
        ]
    },
    'relationship-other': {
        labelClassName: 'visuallyhidden',
    },
    'third-party-first-name': {
        labelClassName: 'form-label-bold',
        validate: [
            'required'
        ]
    },
    'third-party-last-name': {
        labelClassName: 'form-label-bold',
        validate: [
            'required'
        ]
    },
    'why-cant-apply': {
        labelClassName: 'visuallyhidden',
        className: 'textarea',
    },
    'lost-stolen-no-docs': {
        legend: {
            value: 'Are you sending any documents?',
            className: 'visuallyhidden'
        },
        className: 'inline',
        options: [{
                value: false,
                label: 'Yes'
            },
            {
                value: true,
                label: 'No'
            }
        ],
        formatter: [
            'boolean'
        ],
        validate: [
            'required'
        ]
    },
    'declaration': {
        formatter: 'boolean',
        validate: [
            'required'
        ]
    }
};