module.exports = {
    '/': {
        fields: ['pex-reference'],
        next: '/track-a-application'
    },
    '/track-a-application': {
        next: '/track'
    },
    '/track': {
        fields: ['age-day', 'age-month', 'age-year'],
        next: '/waiting-for-old-pass'
    },
    '/waiting-for-old-pass': {
        next: '/track'
  },
  '/passport-coming': {
      next: '/track'
  }
};
