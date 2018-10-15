module.exports = {
    '/': {
        backLink: '../user/need-csig',
        next: '/give-csig-details',
        controller: require('../../../controllers/csig-email-pre')
    },
    '/give-csig-details': {
        fields: ['csig-email', 'csig-name', 'csig-last-name', 'contact-csig'],
        backLink: './',
        next: '/email-sent'
    },
    '/email-sent': {
        backLink: '/give-csig-details',
        controller: require('../../../controllers/csig-email'),
        next: '/tracking-waiting'
    },
    '/tracking-waiting': {
        fields: ['renominate'],
        next: '/../user-contact',
        forks: [{
            condition: function (req, res) {
                // setter for Document page to redirect back to Csig
                req.sessionModel.set('trackWaiting', true)
            }
        }]
    },
    '/tracking-waiting-renominate': {
        next: '/track'
    },
    '/tracking-waiting-renominate-anytime': {
        next: '/track'
    },
    '/email-confirmation': {

    },
    '/how-to': {

    }
};
