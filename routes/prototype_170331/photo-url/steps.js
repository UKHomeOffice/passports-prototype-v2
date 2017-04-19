module.exports = {
    '/':{
      next: '/error'
    },
    '/error': {
        backLink: './',
    },
    '/success': {
        backLink: './',
      }
};
