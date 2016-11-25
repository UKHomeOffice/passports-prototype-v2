module.exports = {
    '/':{
        backLink: '../intro/choose-photo-method',
        fields: ['passport-number', 'expiry-year', 'expiry-month'],
        next: '/title'
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
        fields:['age-day', 'age-month', 'age-year', 'born-in-uk', 'town-of-birth', 'country-of-birth']    },
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
        next: '/passport-special-delivery'
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
        controller: require('../../../controllers/confirm-without-photo'),
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
        next: '/confirmation-paper-photo'
    },
    '/confirmation-paper-photo':{
        next: '/confirmation-paper-photo'
    },
    '/confirmation':{
        next: '/title'
    }
};
