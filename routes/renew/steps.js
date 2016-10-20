module.exports = {
    '/': {
        fields: ['passport-number', 'expiry-year', 'expiry-month'],
        next: '/check-personal-data'
    },
    '/check-personal-data': {
        next: '/check-photo'
    },
    '/check-photo':{
        next: '/title'
    },
    '/title':{
        fields: ['title'],
        next: '/name'
    },
    '/name':{
        fields: ['name','lastname'],
        next: '/gender'
    },
    '/gender':{
        next: '/date-and-place-birth'
    },
    '/date-and-place-birth':{
        fields:['age-day', 'age-month', 'age-year', 'town-birth'],
        next: '/home-address'
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
        fields:['passport-options'],
        next: '/delivering'
    },
    '/delivering':{
        next: '/title'
    }
};
