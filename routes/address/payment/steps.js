module.exports = {
    '/': {
      backLink: '../startpage',
      next: '/passport-damaged'
    },
    '/passport-damaged': {
        backLink: './',
        next: '/filter' /* if No is selected */
    },
    '/premium-offline': {
        backLink: './'
    },
    '/premium-online': {
        backLink: './'
    },
    '/payment': {
        backLink: './'
    }
};
