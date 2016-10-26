module.exports = {
    'choose-photo': {
      legend: {
        value: 'What are you trying to do?',
        className: 'visuallyhidden'
      },
      options: [
        {value: 'myself', label: 'Show me how to do it myself'},
        {value: 'shop', label: 'Show me how to get it from a shop (not yet prototyped)'},
        {value: 'upload', label: 'I already have a digital photo'}
      ],
      validate: [
        'required',
        {
          type:'equal',
          arguments:['upload','shop'],
          redirect:'/../photoguide-myself'
        },
        {
          type:'equal',
          arguments:['upload','myself'],
          redirect:'/../photoguide-myself'
        },
        {
          type:'equal',
          arguments:['upload','upload'],
          redirect:'/../uploadphoto'
        }
      ]
    }

};
