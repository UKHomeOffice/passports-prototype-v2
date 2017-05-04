module.exports = {
   '/':{
       controller: require('../../../controllers/photo-url'),
       fields: ['photo-url'],
       next: '/error'
   },
   '/error': {
       backLink: './',
   },
   '/success': {
       backLink: './',
     }
};
