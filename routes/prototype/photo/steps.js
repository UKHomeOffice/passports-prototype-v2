module.exports = {
    '/': {
        // next: '/dob'
        next: '/choose-photo-method'
    },
    '/dob': {
        controller: require('../../../controllers/check-dob'),
        fields: [
            'age-day',
            'age-year',
            'age-month'
        ],
        backLink: '/prototype/intro',
        // next: '/choose-photo-method'
        next: '/'
    },
    '/choose-photo-method': {
        fields: ['choose-photo'],
        backLink: './',
        next: '/photo-guidance',
        forks: [{
            target: '/photo-guidance',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['choose-photo'] == 'upload';
            }
        }, {
            target: '/retrieve',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['choose-photo'] == 'code';
            }
        }]
    },
    '/photo-guidance': {
        next: '/upload'
    },
    '/photo-guidance-no-accordion': {},
    '/photo-guide': {
        next: '/photo-guide-find-camera'
    },
    '/photo-guide-find-camera': {
        next: '/photo-guide-background'
    },
    '/photo-guide-background': {
        next: '/photo-guide-lighting'
    },
    '/photo-guide-lighting': {
        next: '/photo-guide-distance'
    },
    '/photo-guide-distance': {
        next: '/photo-guide-space'
    },
    '/photo-guide-space': {
        next: '/photo-guide-shadows'
    },
    '/photo-guide-shadows': {
        next: '/photo-guide-face'
    },
    '/photo-guide-face': {
        next: '/photo-guide-get-ready-for-photo'
    },
    '/photo-guide-get-ready-for-photo': {
        next: '/photo-guide-child'
    },
    '/photo-guide-child': {
        next: '/photo-guide-video'
    },
    '/photo-guide-video': {
        next: '/upload',
        forks: [{
            condition: function (req, res) {
                // setter for `upload` page to dynamically change heading
                req.sessionModel.set('routeFromPhotoGuide', true)
            }
        }]
    },
    '/photo-booth-shop': {},
    '/upload': {
        controller: require('../../../controllers/check-photo-file-name'),
        // backLink: './choose-photo-method',
        next: '/processing-or-retrieving-image',
        forks: [{
            condition: function (req, res) {
                // setter for `upload` page to dynamically change heading
                req.sessionModel.set('routeFromPhotoGuide', false) // reset
            }
        }, {
            target: '/../photo/upload-errors',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['status'] == 'retry'
            }
        }]
    },
    '/processing-or-retrieving-image': {
        // backLink: './upload',
    },
    '/questions-intro': {
        backLink: './upload',
        next: '/final-checks'
    },
    '/final-checks': {
        fields: [
            'submit-photo'
        ],
        // backLink: './questions-intro',
        next: '/../apply',
        forks: [{
            target: '/../apply',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true; // If they have had UK passport before
            }
        }, {
            target: '/../apply/name',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false; // If they have NOT had UK passport before
            }
        }, {
            target: '/choose-photo-method',
            condition: {
                field: 'submit-photo',
                value: false
            }
        }]
        // {
        //     target: '/../apply',
        //     condition: function (req, res) { // If they have had UK passport before AND NOT a Hidden FTA
        //         return req.session['hmpo-wizard-common']['passport-before'] == true
        //             && req.session['hmpo-wizard-common']['old-blue'] == false;
        //     }
        // }, {
        //     target: '/csig-required',
        //     condition: function (req, res) { // If they are an FTA OR Hidden FTA
        //         return req.session['hmpo-wizard-common']['passport-before'] == false
        //             || req.session['hmpo-wizard-common']['passport-before'] == true
        //             && req.session['hmpo-wizard-common']['old-blue'] == true;
        //     }
        // }
    },
    // '/csig-required': {
    //     next: '/../apply',
    //     forks: [{
    //         target: '/../apply',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['passport-before'] == true; // If they are a Hidden FTA
    //         }
    //     }, {
    //         target: '/../apply/name',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['passport-before'] == false; // If they are a FTA
    //         }
    //     }]
    // },
    '/retrieve': {
        fields: ['photo-code-path'],
        // backLink: './choose-photo-method',
        next: '/processing-or-retrieving-image'
    },
    '/fetch-photo-result': {
        controller: require('../../../controllers/fetch-photo-result')
    },
    '/check-and-submit-passed-photo': {
        next: '/declaration-passed-photo'
    },
    '/check-and-submit-okay-2-photo': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-2-photo-participant-1': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-2-photo-participant-2': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-2-photo-participant-3': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-2-photo-participant-5': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-2-photo-participant-6': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-2b-photo': {
        next: '/declaration-okay-2-photo'
    },
    '/check-and-submit-okay-1-photo': {
        next: '/declaration-okay-1-photo'
    },
    '/check-and-submit-failed-photo': {
        next: '/declaration-failed-photo'
    },
    '/check-and-submit-failed-photo-participant-1': {
        next: '/declaration-failed-photo'
    },
    '/check-and-submit-failed-photo-participant-5': {
        next: '/declaration-failed-photo'
    },

    // '/check-and-submit-passed-photo': {
    //     fields: ['submit-photo'],
    //     next: '/../filter/first-uk',
    //     forks: [{
    //         target: '/../photo',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['submit-photo'] == false;
    //         }
    //     }]
    // },
    '/declaration-passed-photo': {
        fields: ['submit-photo'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['submit-photo'] == false;
            }
        }]
    },
    '/declaration-okay-2-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-okay-2-photo-participant-1': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-okay-2-photo-participant-2': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-okay-2-photo-participant-3': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-okay-2-photo-participant-5': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-okay-2-photo-participant-6': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-okay-1-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-failed-photo': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    '/declaration-failed-photo-participant-1': {
        fields: ['oix-override', 'oix-override-reason'],
        next: '/../filter/first-uk',
        forks: [{
            target: '/choose-photo-method',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['oix-override'] == false;
            }
        }]
    },
    // '/check-and-submit-failed-photo': {
    //     fields: ['oix-override', 'oix-override-reason'],
    //     next: '/../filter/first-uk',
    //     forks: [{
    //         target: '/../photo',
    //         condition: function (req, res) {
    //             return req.session['hmpo-wizard-common']['oix-override'] == false;
    //         }
    //     }]
    // },
    '/not-accepted': {
        next: '/choose-photo-method'
    },
    '/code-error': {
        backLink: './retrieve',
        next: '/choose-photo-method'
    }
};