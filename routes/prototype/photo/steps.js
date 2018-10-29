module.exports = {
    '/': {
    },
    '/you-need-a-photo': {
        next: '/choose-photo-method'
    },
    '/choose-photo-method': {
        fields: ['choose-photo'],
        next: '/upload'
    },
    '/photo-retrieved': {
        next: '/../photo/uploadphoto'
    },
    '/get-photo-code': {
        fields: ['photo-code-path'],
        backLink: './choose-photo-method',
        next: '/retrieving'
    },
    '/retrieving': {
        backLink: './get-photo-code',
    },
    '/fetch-result': {
        controller: require('../../../controllers/fetch-result')
    },
    '/error': {
        backLink: './get-photo-code',
    },
    '/upload': {
        next: '/../photo/uploadphoto',
        controller: require('../../../controllers/check-query-string'),
        forks: [{
          target: '/../photo/uploadphoto-child',
          condition: function (req, res) {
            return req.session['hmpo-wizard-common']['status'] == 'retry'
          }
        }]
      }
};
