module.exports = {
    '/': {
    },
    '/digital-photo': {
        next: '/choose-photo-method'
    },
    '/choose-photo-method': {
        fields: ['choose-photo'],
        next: '/upload'
    },
    '/photo-retrieved': {
        next: '/../photo/uploadphoto'
    },
    '/retrieve': {
        fields: ['photo-code-path'],
        backLink: './choose-photo-method',
        next: '/retrieving-image'
    },
    '/retrieving-image': {
        backLink: './retrieve',
    },
    '/fetch-result': {
        controller: require('../../../controllers/fetch-result')
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
