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
    '/home-address':{
      fields:['address1', 'address2','address3','address4','address5', 'town', 'postcode'],
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
        fields: ['passport-options-dps', 'braille'],
        next: '/sign'
    },
    '/sign': {
        fields: ['can-sign', 'no-sign-reason'],
        backLink: './',
        next: '/summary', /* if they are from the UK */
        controller: require('../../../controllers/go-overseas'),
        nextAlt: './summary-overseas'
    },
    '/passport-special-delivery': {
        next: '/summary',
        fields: ['secure-return']
    },
    '/summary':{
        controller: require('../../../controllers/confirm-dps'),
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
