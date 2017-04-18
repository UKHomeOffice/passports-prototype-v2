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
        fields:['address1', 'address2','address3','address4','address5', 'town', 'postcode'],
        next: '/contact-details-overseas'
    },
    '/home-address':{
        fields:['address1', 'address2','address3','address4','address5', 'town', 'postcode'],
        next: '/contact-details'
    },
    '/contact-details-overseas':{
        fields:['email','application-country-code' ,'mobile-overseas'],
        next: '/get-updates-overseas'
    },
    '/contact-details':{
        fields:['email', 'mobile'],
        next: '/get-updates'
    },
    '/get-updates-overseas':{
        next: '/passport-options-overseas'
    },
    '/get-updates':{
        next: '/passport-options'
    },
    '/passport-options-overseas':{
        fields: ['passport-options-overseas', 'braille'],
        next: '/sign'
    },
    '/passport-options':{
        fields: ['passport-options', 'braille'],
        next: '/sign'
    },
    '/sign': {
        fields: ['can-sign', 'no-sign-reason'],
        backLink: './',
        next: '/passport-special-delivery', /* if they are from the UK */
        controller: require('../../../controllers/go-overseas'),
        nextAlt: './summary-overseas'
    },
    '/summary-overseas':{
        controller: require('../../../controllers/confirm-overseas'),
        template: 'confirm',
        next: '/declaration'
    },
    '/passport-special-delivery': {
        next: '/summary',
        fields: ['secure-return']
    },
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
