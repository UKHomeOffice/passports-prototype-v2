module.exports = {
    'choose-photo': {
      legend: {
        value: 'What are you trying to do?',
        className: 'visuallyhidden'
      },
      options: [
        {value: 'myself', label: 'Show me how to do it myself'},
        {value: 'shop', label: 'Show me how to get it from a shop (not yet prototyped)'},
        {value: 'code', label: 'I have a printed photo with a code'},
        {value: 'upload', label: 'I already have a digital photo'}
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['upload','shop', 'code'],
          redirect:'/../photoguide-short'
        },
        {
          type:'equal',
          arguments:['upload','myself', 'code'],
          redirect:'/../photoguide-shop'
        },
        {
          type:'equal',
          arguments:['upload','upload', 'code'],
          redirect:'/../upload'
        },
        {
          type:'equal',
          arguments:['upload','myself', 'shop'],
          redirect:'/get-photo-code'
        }
      ]
    }

};
