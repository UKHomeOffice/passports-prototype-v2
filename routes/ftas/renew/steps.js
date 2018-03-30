module.exports = {
    '/':{
        backLink: '../uploadphoto/check-photo-and-submit',
        fields: ['passport-number'],
        next: '/name'
    },
    '/title':{
        backLink: './',
        fields: ['title'],
        next: '/name'
    },
    '/name':{
        backLink: '../renew',
        fields: [
            'title',
            'name',
            'lastname',
            'change-name'
        ],
        next: '/previous-names',
        forks: [{
            target: '/change-of-name',
            condition: {
                field: 'change-name',
                value: true
            }
        }]
    },
    '/change-of-name':{
        backLink: 'name',
        fields: ['change-of-name-reason'],
        next: '/previous-names'
    },
    '/previous-names':{
        fields: [
                'previous-name',
                'previous-first-name',
                'previous-last-name'
                 ],
        backLink: 'name',
        next: '/gender'
    },
    '/gender':{
        fields: ['gender'],
        next: '/date-and-place-birth'
    },
    '/date-and-place-birth':{
        next: '/parents-details',
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
    '/dual-national':{
        backLink: './get-updates',
    },
    '/dual-national-details':{
        backLink: 'dual-national',
        next: '/title'
    },
    '/passport-options-overseas':{
        fields: ['passport-options-overseas', 'braille'],
        next: '/sign'
    },
    '/passport-options':{
        fields: ['passport-options', 'braille'],
        next: '/sign',
        backLink: './dual-national'
    },
    '/sign': {
        fields: ['can-sign', 'no-sign-reason'],
        backLink: 'passport-options',
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
        next: '/fta-docs'
    },
    '/fta-docs':{
        backLink: 'summary',
        next: '/declaration'
    },
    '/declaration':{
        prereqs: [ '/summary' ],
        next: '/payment'
    },
    '/payment':{
        controller: require('../../../controllers/dual-national'),
        next: '/processing-payment'
    },
    '/processing-payment':{
        next: '/confirmation'
    },
    '/confirmation':{
        next: '/title'
    },
        '/parents-details':{
        fields:['parent1-first-names','parent2-first-names'],
        next: '/parent-1-details'
    },
        '/parent-1-details':{
        fields:[],
        next: '/parent-2-details'
    },
        '/parent-2-details':{
        fields:['parent2-first-names'],
        next: '/home-address'
    }
};
