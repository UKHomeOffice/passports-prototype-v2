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

// prototype views
// app.set('views', __dirname + '/views/prototype_161025');

// routes
app.use(require('./routes/start'));
app.use('/prototype_161025/static', require('./routes/prototype_161025/static'));
app.use('/prototype_161025/forms', require('./routes/prototype_161025/forms'));
app.use('/prototype_161025/sar', require('./routes/prototype_161025/sar'));
app.use('/prototype_161025/overseas', require('./routes/prototype_161025/overseas'));
app.use('/prototype_161025/uploadphoto', require('./routes/prototype_161025/uploadphoto'));
app.use('/prototype_161025/photoguide-myself', require('./routes/prototype_161025/photoguide-myself'));
app.use('/prototype_161025/renew', require('./routes/prototype_161025/renew'));
app.use('/prototype_161025/intro', require('./routes/prototype_161025/intro'));
app.use('/prototype_161025/filter', require('./routes/prototype_161025/filter'));
app.use('/prototype_161025/startpage', require('./routes/prototype_161025/startpage'));
app.use('/prototype_161025/renew_10_NOV', require('./routes/prototype_161025/renew_10_NOV'));

app.use('/prototype_11112016/static', require('./routes/prototype_11112016/static'));
app.use('/prototype_11112016/forms', require('./routes/prototype_11112016/forms'));
app.use('/prototype_11112016/sar', require('./routes/prototype_11112016/sar'));
app.use('/prototype_11112016/overseas', require('./routes/prototype_11112016/overseas'));
app.use('/prototype_11112016/uploadphoto', require('./routes/prototype_11112016/uploadphoto'));
app.use('/prototype_11112016/photoguide-myself', require('./routes/prototype_11112016/photoguide-myself'));
app.use('/prototype_11112016/renew', require('./routes/prototype_11112016/renew'));
app.use('/prototype_11112016/intro', require('./routes/prototype_11112016/intro'));
app.use('/prototype_11112016/filter', require('./routes/prototype_11112016/filter'));
app.use('/prototype_11112016/startpage', require('./routes/prototype_11112016/startpage'));
app.use('/prototype_11112016/renew_10_NOV', require('./routes/prototype_11112016/renew_10_NOV'));





var port = process.env.PORT || 3000;
app.listen(port);
console.log('App listening on port %s', port);
