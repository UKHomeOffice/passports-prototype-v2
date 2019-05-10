var express = require('express');
session = require('express-session'),
    app = express(),
    path = require('path'),
    redis = require('./lib/redis-client'),
    _ = require('lodash');

redis.getClient(function (err, client) {
    let store;

    if (err) {
        // var FSStore = require('connect-fs2')(session);
        // store = new FSStore();
    } else {
        var RedisStore = require('connect-redis')(session);
        store = new RedisStore({
            client: client,
            ttl: 60 * 30
        });
    }

    init({
        store: store,
        secret: 'abc123',
        resave: true,
        saveUninitialized: true
    });
});

function init(sessionConfig) {

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
    app.use(session(sessionConfig));

    app.use(require('i18n-future').middleware());
    app.use(require('body-parser').urlencoded({
        extended: true
    }));

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

    require('./lib/nunjucks')(app);

    require('./routes');

    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log('App listening on port %s', port);
    runGulp()
}

// Run gulp
function runGulp() {
    const spawn = require('cross-spawn')

    process.env['FORCE_COLOR'] = 1
    var gulp = spawn('./node_modules/.bin/gulp')
    gulp.stdout.pipe(process.stdout)
    gulp.stderr.pipe(process.stderr)
    process.stdin.pipe(gulp.stdin)

    gulp.on('exit', function (code) {
        console.log('gulp exited with code ' + code.toString())
    })
}