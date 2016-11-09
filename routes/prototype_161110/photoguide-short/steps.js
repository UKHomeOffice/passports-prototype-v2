module.exports = {
  '/': {
    next: '/short-find-camera',
    backLink: '/../overseas/choose-photo-method'
  },
  '/short-find-camera': {
    next: '/short-plain-bg',
    backLink: './'
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
