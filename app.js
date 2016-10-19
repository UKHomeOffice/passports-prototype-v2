var express = require('express');
    app = express(),
    path = require('path');

// session
app.use(require('cookie-parser')());
app.use(require('express-session')({
    secret: 'abc123'
}));

app.use(require('i18n-future').middleware());
app.use(require('body-parser').urlencoded({ extended: true }));

// templates
app.set('view engine', 'html');
app.use(require('hmpo-templates'));
app.engine('html', require('hogan-express-strict'));
app.use(require('express-partial-templates')(app));
app.use(require('hmpo-template-mixins')());
app.use('/public/images', express.static('assets/images'));
app.use('/public/images', express.static(path.resolve(path.dirname(require.resolve('hmpo-frontend-toolkit')), 'assets/images')));
app.use('/public', express.static('public'));
app.use(function (req, res, next) {
    res.locals.assetPath = '/public';
    next();
});


// routes
app.use(require('./routes/start'));
app.use('/static', require('./routes/static'));
app.use('/forms', require('./routes/forms'));
app.use('/sar', require('./routes/sar'));
app.use('/overseas', require('./routes/overseas'));
app.use('/uploadphoto', require('./routes/uploadphoto'));
app.use('/photoguide-myself', require('./routes/photoguide-myself'));
app.use('/renew', require('./routes/renew'));
app.use('/intro', require('./routes/intro'));




var port = process.env.PORT || 3000;
app.listen(port);
console.log('App listening on port %s', port);
