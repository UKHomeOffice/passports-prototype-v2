module.exports = {
    '/': {
      backLink: '../startpage',
      next: '/passport-damaged'
    },
    '/index2': {
        backLink: './',
        next: './' /* if No is selected */
    },
    '/passport-damaged': {
        backLink: './',
        next: '/filter-common' /* if No is selected */
    },
    '/premium-offline': {
        backLink: './'
    },
    '/premium-online': {
        backLink: './'
    },
    '/fast-track': {
        backLink: './'
    }
};
