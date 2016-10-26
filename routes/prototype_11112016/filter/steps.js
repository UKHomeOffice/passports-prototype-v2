module.exports = {
    '/': {
        fields: ['what-to-do'],
        backLink: '/../startpage',
        next: '/dob'
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
        backLink: './',
        next: '/apply-from-uk' /* if Yes is selected */
    },
    '/apply-from-uk': {
      fields: ['apply-uk'],
        backLink: './dob',
        next: '/passport-damaged' /* if Yes is selected */
    },
    '/passport-damaged': {
      fields: ['passport-damaged'],
        backLink: './apply-from-uk',
        next: '/passport-expiry' /* if No is selected */
    },
    '/passport-expiry': {
      fields: ['expiry-year', 'expiry-month'],
        backLink: './passport-damaged',
        next: '/uncancelled'
    },
    '/uncancelled': {
      fields: ['uncancelled'],
        backLink: './passport-damaged',
        next: '/../intro'
    }
};
