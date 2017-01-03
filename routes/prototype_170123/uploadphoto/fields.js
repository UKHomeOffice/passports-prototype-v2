module.exports = {
    'plain-expression': {
      legend: {
        value: 'Do you have a plain expression?',
        className: 'visuallyhidden'
      },
      options: [
        {value: 'Yes', label: 'Yes, I have a plain expression'},
        {value: 'No', label: 'No, I have a slight smile or frown'}
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['No','No'],
          redirect:'/shadows-face'
        },
        {
          type:'equal',
          arguments:['No','Yes'],
          redirect:'/you-need-another-photo'
        }
      ]
    },
    'shadows-face': {
      legend: {
        value: 'Are there any shadows on your face or in the background?',
        className: 'visuallyhidden'
      },
      options: [
        {value: 'Yes', label: 'My photo looks ok – there are no shadows'},
        {value: 'No', label: 'There’s a shadow on my face or background'}
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['No','No'],
          redirect:'/check-photo-and-submit'
        },
        {
          type:'equal',
          arguments:['No','Yes'],
          redirect:'/you-need-another-photo'
        }
      ]
    }

};
