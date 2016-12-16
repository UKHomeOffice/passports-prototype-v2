module.exports = {
    '/':{
        backLink: '../uploadphoto/check-photo-and-submit',
        next: '/old-pass-details'
    },
    '/old-pass-details': {
        backLink: './',
        fields: ['passport-number', 'expiry-year', 'expiry-month'],
        next: '/title'
    },
    '/title':{
        fields: ['title'],
        next: '/name'
    },
    '/name':{
        fields: [
            'name',
            'lastname',
            'previous-name',
            'previous-names'
        ],
        next: '/gender'
    },
    '/gender':{
        fields: ['gender'],
        next: '/date-and-place-birth'
    },
    '/date-and-place-birth':{
        next: '/home-address',
        fields:['age-day', 'age-month', 'age-year', 'born-in-uk', 'town-of-birth', 'country-of-birth'],
        controller: require('../../../controllers/go-overseas'),
        nextAlt: './home-address-overseas'
      },
    '/home-address-overseas':{
        fields:['address1', 'address2', 'town', 'postcode'],
        next: '/contact-details'
    },
    '/home-address':{
        fields:['address1', 'address2', 'town', 'postcode'],
        next: '/contact-details'
    },
    '/contact-details':{
        fields:['email', 'mobile'],
        next: '/get-updates'
    },
    '/get-updates':{
        next: '/passport-options'
    },
    '/passport-options':{
        fields: ['passport-options', 'braille'],
        next: '/sign'
    },
    '/sign': {
        fields: ['can-sign', 'no-sign-reason'],
      /*  controller: require('../../../controllers/go-overseas'),*/
        backLink: './',
        next: '/passport-special-delivery', /* if they are from the UK */
        /*nextAlt: '../summary'  if they are from overseas */
    },
    '/passport-special-delivery': {
        next: '/summary',
        fields: ['secure-return']
    },
      /*
    '/returning-old-pass':{  /* -> to combine with delivering
        backLink: './sending-old-pass',
        fields: ['return-passport'],
        next: '/title'
    },*/
    '/summary':{
        controller: require('../../../controllers/confirm'),
        template: 'confirm',
        next: '/declaration'
    },
    '/declaration':{
        next: '/payment'
    },
    '/payment':{
        next: '/processing-payment'
    },
    '/processing-payment':{
        next: '/confirmation'
    },
    '/confirmation':{
        next: '/title'
    }
};
