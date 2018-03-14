module.exports = {
  '/': {
    next: '/short-plain-bg',
    backLink: '/../change_of_name_180122/intro/choose-photo-method'
  },
  '/find-a-camera': {
    next: '/short-plain-bg'
  },
  '/short-plain-bg': {
    next: '/short-lighting'
  },
  '/short-lighting': {
    next: '/short-right-position'
  },
  '/short-right-position': {
      next: '/short-crop'
  },
  '/short-crop': {
    next: '/short-noshadows'
  },
  '/short-noshadows': {
    next: '/short-rules-1'
  },
  '/short-rules-1': {
    next: '/short-rules-2'
  },
  '/short-rules-2': {
    next: '/../takephoto'
  }
};
