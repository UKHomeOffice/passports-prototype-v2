module.exports = {
    '/': {
        backLink: '/../uploadphoto/check-photo-and-submit',
        fields: ['passport-number', 'expiry-year', 'expiry-month'],
        next: '/check-personal-data'
    },
    '/check-personal-data': {
        backLink: './',
        next: '/check-photo'
    },
    '/check-photo':{
        backLink: './check-personal-data',
        next: '/sending-old-pass'
    },
    '/sending-old-pass':{
        backLink: './check-photo',
        next: '/returning-old-pass'
    },
    '/returning-old-pass':{
        backLink: './sending-old-pass',
        fields: ['return-passport'],
        next: '/title'
    },
    '/title':{
        backLink: './returning-old-pass',
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
        next: '/home-address'
    },
    '/home-address':{
        backLink: './date-and-place-birth',
        fields:['address1', 'address2', 'town', 'postcode'],
        next: '/contact-details'
    },
    '/contact-details':{
        backLink: './home-address',
        fields:['email', 'mobile'],
        next: '/get-updates'
    },
    '/get-updates':{
        backLink: './contact-details',
        next: '/passport-options'
    },
    '/passport-options':{
        backLink: './get-updates',
        fields:['passport-options'],
        next: '/delivering'
    },
    '/delivering':{
        backLink: './passport-options',
        next: '/summary'
    },
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
