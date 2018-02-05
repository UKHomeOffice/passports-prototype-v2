module.exports = {
  '/': {
    next: '/short-plain-bg',
    backLink: '/../priority_service_170731/intro/choose-photo-method'
  },
  '/short-plain-bg': {
    next: '/short-lighting'
  },
  '/short-lighting': {
    next: '/short-right-position'
  },
  '/short-right-position': {
    next: '/short-noshadows'
  },
  '/short-noshadows': {
    next: '/short-crop'
  },
  '/short-crop': {
    next: '/short-rules-1'
  },
  '/short-rules-1': {
    next: '/short-rules-2'
  },
  '/short-rules-2': {
    next: '/../priority_service_170731/takephoto'
  }
};
