module.exports = {
    '/': {
        backLink: '../filter/summary',
        next: '/what-you-need',
        forks: [{
            target: '/../photo/you-need-a-photo',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['passport-before'] == true &&
                    req.session['hmpo-wizard-common']['old-blue'] == false;
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
        next: '/../photo/you-need-a-photo'
    }
};