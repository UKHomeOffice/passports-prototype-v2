module.exports = {
   '/':{
       controller: require('../../../controllers/photo-code'),
       fields: ['photo-code'],
       next: '/error'
   },
   '/error': {
       backLink: './',
   },
   '/success': {
       backLink: './',
     }
};
