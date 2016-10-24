module.exports = {
    '/': {
      next: '/check-photo'
    },
    '/check-photo':{
        backLink: './',
        next: '/old-pass-details'
    },
    '/old-pass-details': {
        backLink: '/check-photo',
        fields: ['passport-number', 'expiry-year', 'expiry-month'],
        next: '/title'
    },
    '/title':{
        backLink: './old-pass-details',
        fields: ['title'],
        next: '/name'
    },
    '/name':{
        backLink: './title',
        fields: ['name','lastname'],
        next: '/gender'
    },
    '/gender':{
        backLink: './name',
        next: '/date-and-place-birth'
    },
    '/date-and-place-birth':{
        backLink: './gender',
        fields:['age-day', 'age-month', 'age-year', 'town-birth'],
        next: '/sending-old-pass'
    },
    '/sending-old-pass':{
        backLink: './date-and-place-birth',
        next: '/home-address'
    },
    '/home-address':{
        backLink: './sending-old-pass',
        fields:['address1', 'address2', 'town', 'postcode'],
        next: '/contact-details'
    },
    '/contact-details':{
        backLink: './home-address',
        fields:['email', 'mobile'],
        next: '/passport-options'
    },
    '/passport-options':{
        backLink: './get-updates',
        fields:['passport-options'],
        next: '/signing-you-passport'
    }, /* another page here for sign your passport */
    '/signing-you-passport':{
        backLink: './passport-options',
        next: '/delivering'
    },
    '/delivering':{
        backLink: './passport-options',
        next: '/summary'
    },
      /*
    '/returning-old-pass':{  /* -> to combine with delivering
        backLink: './sending-old-pass',
        fields: ['return-passport'],
        next: '/title'
    },*/
    '/summary':{
        backLink: './delivering',
        next: '/declaration'
    },
    '/declaration':{
        backLink: './summary',
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
