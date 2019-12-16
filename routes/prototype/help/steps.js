module.exports = {
    '/help-or-feedback': {
        fields: [
            'need-help'
        ],
        next: '/phase-banner-feedback-page',
        forks: [{
            target: '/redirect-help',
            condition: function (req, res) {
                return req.session['hmpo-wizard-common']['need-help'] == true;
            }
        }]
    },
    '/redirect-help': {
        controller: require('../../../controllers/redirect-help')
    },
    '/phase-banner-feedback-page': {
        next: '/feedback-thankyou',
    },
    '/feedback-thankyou': {},
};
