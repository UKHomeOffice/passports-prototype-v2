module.exports = {
    'name': {
        validate: 'required'
    },
    'lastname': {
        validate: 'required'
    },
    'passport-number': {
        validate: [
            'required',
            'numeric',
            {type: 'exactlength', arguments: [9]}
        ]
    },
    'age-day': {
        labelClassName: 'form-label',
        validate:[
            'required',
            'numeric',
            'date-day'
        ]
    },
    'age-month': {
        labelClassName: 'form-label',
        validate:[
            'required',
            'numeric',
            'date-month'
        ]
    },
    'age-year': {
        labelClassName: 'form-label',
        validate:[
            'required',
            'numeric',
            'date-year'
        ]
    },
    'verification-method': {
        validate: 'required',
        options: [
            { value: 'nino-verification', label: 'Verify by National Insurance number' },
            { value: 'other', label: 'Verify by other method' }
        ]
    },
    'national-insurance': {
        validate:[
            'required',
            function ninoformat(val) {
              return val.match('^[A-z]{2}[0-9]{6}[A-z]{1}$');
            }
        ]
    },
    'person-check': {
        validate: 'required',
        options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
        ]
    },
    'reasons': {
        validate: 'required',
        options: [
            { value: 'no-likeness', label: 'Did not look like them' },
            { value: 'no-knowledge', label: 'Do not know who they are' },
            { value: 'other', label: 'other' }
        ]
    }
};
