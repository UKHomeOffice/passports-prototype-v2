var express = require('express');
    app = express(),
    path = require('path'),
    redis = require('./lib/redis-client'),
    _ = require('lodash');

// check for Redis session store
var session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    sessionConfig = {
        secret: 'abc123',
        resave: true,
        saveUninitialized: true
    };

redis.getClient(function (err, client) {
    if (err) {
        return init();
    }
    init({
        store: new RedisStore({
            client: client,
            ttl: 60 * 30
        })
    });
});

function init(sessionStore) {

    // auth
   if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'heroku') {
        var auth = require('express-basic-auth');

       function authoriser(user, pass) {
            return (user === process.env.USER || user === 'fish') && (pass === process.env.PASS || pass === process.env.PASSWORD || pass === 'chips');
        };

        app.use(auth({
            authorizer: authoriser,
            challenge: true
        }));
    }

    // session
    app.use(require('cookie-parser')());
    app.use(session(_.extend(sessionConfig, sessionStore)));

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
        res.locals.urls = {
            feedback: ' '
        };
        next();
    });

    //create static folder for email templates etc
    app.use('/static', express.static(path.join(__dirname, '/static')));

    require('./routes');

    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log('App listening on port %s', port);
}
