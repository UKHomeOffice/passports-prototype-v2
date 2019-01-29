module.exports = {
    '/': {
        backLink: '../filter/summary',
        next: '/../photo',
        forks: [{
            target: '/what-you-need',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == false ||
                    req.session['hmpo-wizard-common']['old-blue'] == true ||
                    req.session['hmpo-wizard-common']['lost-stolen'] == true
            }
        }, {
            target: '/what-you-need',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true &&
                    req.session['hmpo-wizard-common']['16-or-older'] == false
            }
        }]
    },
    '/what-you-need': {
        backLink: './',
        fields: ['what-you-will-need-declaration'],
        next: '/../photo'
    }
};
