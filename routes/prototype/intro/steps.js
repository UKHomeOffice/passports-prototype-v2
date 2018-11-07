module.exports = {
    '/': {
        backLink: '../filter/summary',
        next: '/../photo/digital-photo',
        forks: [{
            target: '/what-you-need',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false ||
                    req.session['hmpo-wizard-common']['old-blue'] == true
            }
        },{
            target: '/what-you-need',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true &&
                    req.session['hmpo-wizard-common']['16-or-older'] == false
            }
        }]
    },
    '/before-you-continue-overseas': {
        backLink: '/../prototype/overseas/give-contact-details',
        next: '/what-you-need-overseas'
    },
    '/what-you-need': {
        backLink: './',
        fields: ['what-you-will-need-declaration'],
        next: '/../photo/digital-photo'
    }
};