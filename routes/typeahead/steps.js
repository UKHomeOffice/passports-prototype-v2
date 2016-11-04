module.exports = {
    '/': {
        fields: ['typeahead'],
        next: '/success'
    },
    '/success': {
        controller: require('../../controllers/typeahead'),
        backLink: './'
    }
};
