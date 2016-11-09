module.exports = {
  '/': {
    next: '/short-plain-bg',
    backLink: '/../overseas/choose-photo-method'
  },
  '/short-plain-bg': {
    next: '/short-lighting'
  },
  '/short-lighting': {
    next: '/short-right-position'
  },
  '/short-right-position': {
    next: '/photorules-icao'
  },
  '/photorules-icao': {
    next: '/short-upload-photo'
  },
  '/short-upload-photo': {
  }
};
