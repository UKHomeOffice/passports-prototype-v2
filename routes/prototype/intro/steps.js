module.exports = {
    '/': {
        backLink: '../filter',
        next: '/../photo'
    },
    '/what-you-need': {
        backLink: '../filter/summary',
        fields: ['what-you-will-need-declaration'],
        next: '/../apply',
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
        }]
    }
};
