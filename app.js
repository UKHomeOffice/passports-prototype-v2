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
  /*  if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'heroku') {
        var auth = require('express-basic-auth');

       function authoriser(user, pass) {
            return (user === process.env.USER || user === 'fish') && (pass === process.env.PASS || pass === process.env.PASSWORD || pass === 'chips');
        };

        function authoriser(user, pass) {
            return (user === process.env.USER || user === 'fish') && (pass === process.env.PASS || pass === process.env.PASSWORD || pass === 'chips');
        };

        app.use(auth({
            authorizer: authoriser,
            challenge: true
        }));
    }*/

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
    app.use('/prototype_161025/renew', require('./routes/prototype_161025/renew'));

//prototype 161110
    app.use('/prototype_161110/static', require('./routes/prototype_161110/static'));
    app.use('/prototype_161110/forms', require('./routes/prototype_161110/forms'));
    app.use('/prototype_161110/sar', require('./routes/prototype_161110/sar'));
    app.use('/prototype_161110/overseas', require('./routes/prototype_161110/overseas'));
    app.use('/prototype_161110/uploadphoto', require('./routes/prototype_161110/uploadphoto'));
    app.use('/prototype_161110/photoguide-myself', require('./routes/prototype_161110/photoguide-myself'));
    app.use('/prototype_161110/renew', require('./routes/prototype_161110/renew'));
    app.use('/prototype_161110/intro', require('./routes/prototype_161110/intro'));
    app.use('/prototype_161110/filter', require('./routes/prototype_161110/filter'));
    app.use('/prototype_161110/startpage', require('./routes/prototype_161110/startpage'));
    app.use('/prototype_161110/photoguide-short', require('./routes/prototype_161110/photoguide-short'));
	  app.use('/prototype_161110/photoguide-static', require('./routes/prototype_161110/photoguide-static'));

//prototype 161124
    app.use('/prototype_161124/overseas', require('./routes/prototype_161124/overseas'));
    app.use('/prototype_161124/uploadphoto', require('./routes/prototype_161124/uploadphoto'));
    app.use('/prototype_161124/photoguide-myself', require('./routes/prototype_161124/photoguide-myself'));
    app.use('/prototype_161124/renew', require('./routes/prototype_161124/renew'));
    app.use('/prototype_161124/intro', require('./routes/prototype_161124/intro'));
    app.use('/prototype_161124/filter', require('./routes/prototype_161124/filter'));
    app.use('/prototype_161124/startpage', require('./routes/prototype_161124/startpage'));
    app.use('/prototype_161124/photoguide-short', require('./routes/prototype_161124/photoguide-short'));
    app.use('/prototype_161124/photoguide-static', require('./routes/prototype_161124/photoguide-static'));
    app.use('/prototype_161124/photoguide-shop', require('./routes/prototype_161124/photoguide-shop'));
    app.use('/prototype_161124/renew-without-photo', require('./routes/prototype_161124/renew-without-photo'));
    app.use('/prototype_161124/takephoto', require('./routes/prototype_161124/takephoto'));
    app.use('/prototype_161124/upload', require('./routes/prototype_161124/upload'));

    //prototype 161212
        app.use('/prototype_161212/overseas', require('./routes/prototype_161212/overseas'));
        app.use('/prototype_161212/overseas-not-eligible', require('./routes/prototype_161212/overseas-not-eligible'));
        app.use('/prototype_161212/uploadphoto', require('./routes/prototype_161212/uploadphoto'));
        app.use('/prototype_161212/filter-common', require('./routes/prototype_161212/filter-common'));
        app.use('/prototype_161212/renew', require('./routes/prototype_161212/renew'));
        app.use('/prototype_161212/intro', require('./routes/prototype_161212/intro'));
        app.use('/prototype_161212/filter', require('./routes/prototype_161212/filter'));
        app.use('/prototype_161212/startpage', require('./routes/prototype_161212/startpage'));
        app.use('/prototype_161212/startpage-overseas', require('./routes/prototype_161212/startpage-overseas'));
        app.use('/prototype_161212/photoguide-short', require('./routes/prototype_161212/photoguide-short'));
        app.use('/prototype_161212/photoguide-static', require('./routes/prototype_161212/photoguide-static'));
        app.use('/prototype_161212/photoguide-shop', require('./routes/prototype_161212/photoguide-shop'));
        app.use('/prototype_161212/renew-without-photo', require('./routes/prototype_161212/renew-without-photo'));
        app.use('/prototype_161212/takephoto', require('./routes/prototype_161212/takephoto'));
        app.use('/prototype_161212/upload', require('./routes/prototype_161212/upload'));
        app.use('/prototype_161212/rejectedphoto', require('./routes/prototype_161212/rejectedphoto'));
        app.use('/prototype_161212/filter-common-temp', require('./routes/prototype_161212/filter-common-temp'));
        app.use('/prototype_161212/startpage-temp', require('./routes/prototype_161212/startpage-temp'));

    //prototype 170123
        app.use('/prototype_170123/overseas', require('./routes/prototype_170123/overseas'));
        app.use('/prototype_170123/overseas-not-eligible', require('./routes/prototype_170123/overseas-not-eligible'));
        app.use('/prototype_170123/overseas-first', require('./routes/prototype_170123/overseas-first'));
        app.use('/prototype_170123/overseas-lost-change', require('./routes/prototype_170123/overseas-lost-change'));
        app.use('/prototype_170123/uploadphoto', require('./routes/prototype_170123/uploadphoto'));
        app.use('/prototype_170123/filter-common', require('./routes/prototype_170123/filter-common'));
        app.use('/prototype_170123/renew', require('./routes/prototype_170123/renew'));
        app.use('/prototype_170123/intro', require('./routes/prototype_170123/intro'));
        app.use('/prototype_170123/filter', require('./routes/prototype_170123/filter'));
        app.use('/prototype_170123/startpage', require('./routes/prototype_170123/startpage'));
        app.use('/prototype_170123/startpage-overseas', require('./routes/prototype_170123/startpage-overseas'));
        app.use('/prototype_170123/photoguide-short', require('./routes/prototype_170123/photoguide-short'));
        app.use('/prototype_170123/photoguide-static', require('./routes/prototype_170123/photoguide-static'));
        app.use('/prototype_170123/photoguide-shop', require('./routes/prototype_170123/photoguide-shop'));
        app.use('/prototype_170123/takephoto', require('./routes/prototype_170123/takephoto'));
        app.use('/prototype_170123/upload', require('./routes/prototype_170123/upload'));
        app.use('/prototype_170123/rejectedphoto', require('./routes/prototype_170123/rejectedphoto'));
        app.use('/prototype_170123/filter-common-temp', require('./routes/prototype_170123/filter-common-temp'));
        app.use('/prototype_170123/startpage-temp', require('./routes/prototype_170123/startpage-temp'));
        app.use('/prototype_170123/overseas-not-available', require('./routes/prototype_170123/overseas-not-available'));

        //prototype ovs - or 170331
            app.use('/prototype_170331/overseas', require('./routes/prototype_170331/overseas'));
            app.use('/prototype_170331/overseas-not-eligible', require('./routes/prototype_170331/overseas-not-eligible'));
            app.use('/prototype_170331/overseas-first', require('./routes/prototype_170331/overseas-first'));
            app.use('/prototype_170331/overseas-lost-change', require('./routes/prototype_170331/overseas-lost-change'));
            app.use('/prototype_170331/uploadphoto', require('./routes/prototype_170331/uploadphoto'));
            app.use('/prototype_170331/filter-common', require('./routes/prototype_170331/filter-common'));
            app.use('/prototype_170331/renew', require('./routes/prototype_170331/renew'));
            app.use('/prototype_170331/intro', require('./routes/prototype_170331/intro'));
            app.use('/prototype_170331/filter', require('./routes/prototype_170331/filter'));
            app.use('/prototype_170331/startpage', require('./routes/prototype_170331/startpage'));
            app.use('/prototype_170331/startpage-overseas', require('./routes/prototype_170331/startpage-overseas'));
            app.use('/prototype_170331/photoguide-short', require('./routes/prototype_170331/photoguide-short'));
            app.use('/prototype_170331/photoguide-static', require('./routes/prototype_170331/photoguide-static'));
            app.use('/prototype_170331/photoguide-shop', require('./routes/prototype_170331/photoguide-shop'));
            app.use('/prototype_170331/takephoto', require('./routes/prototype_170331/takephoto'));
            app.use('/prototype_170331/upload', require('./routes/prototype_170331/upload'));
            app.use('/prototype_170331/rejectedphoto', require('./routes/prototype_170331/rejectedphoto'));
            app.use('/prototype_170331/filter-common-temp', require('./routes/prototype_170331/filter-common-temp'));
            app.use('/prototype_170331/startpage-temp', require('./routes/prototype_170331/startpage-temp'));
            app.use('/prototype_170331/overseas-not-available', require('./routes/prototype_170331/overseas-not-available'));
            app.use('/prototype_170331/throttle', require('./routes/prototype_170331/throttle'));
            app.use('/prototype_170331/payment', require('./routes/prototype_170331/payment'));
            app.use('/prototype_170331/submission-failed', require('./routes/prototype_170331/submission-failed'));
            app.use('/prototype_170331/sar', require('./routes/prototype_170331/sar'));
            app.use('/prototype_170331/photo-url', require('./routes/prototype_170331/photo-url'));
            app.use('/prototype_170331/photo-code', require('./routes/prototype_170331/photo-code'));
            app.use('/prototype_170331/mismatch', require('./routes/prototype_170331/mismatch'));
            app.use('/prototype_170331/redirect-tracking', require('./routes/prototype_170331/redirect-tracking'));



            //prototype OIX 120518
                app.use('/prototype_oix_170518/uploadphoto', require('./routes/prototype_oix_170518/uploadphoto'));
                app.use('/prototype_oix_170518/filter-common', require('./routes/prototype_oix_170518/filter-common'));
                app.use('/prototype_oix_170518/renew', require('./routes/prototype_oix_170518/renew'));
                app.use('/prototype_oix_170518/intro', require('./routes/prototype_oix_170518/intro'));
                app.use('/prototype_oix_170518/filter', require('./routes/prototype_oix_170518/filter'));
                app.use('/prototype_oix_170518/startpage', require('./routes/prototype_oix_170518/startpage'));
                app.use('/prototype_oix_170518/photoguide-short', require('./routes/prototype_oix_170518/photoguide-short'));
                app.use('/prototype_oix_170518/photoguide-static', require('./routes/prototype_oix_170518/photoguide-static'));
                app.use('/prototype_oix_170518/photoguide-shop', require('./routes/prototype_oix_170518/photoguide-shop'));
                app.use('/prototype_oix_170518/takephoto', require('./routes/prototype_oix_170518/takephoto'));
                app.use('/prototype_oix_170518/upload', require('./routes/prototype_oix_170518/upload'));
                app.use('/prototype_oix_170518/rejectedphoto', require('./routes/prototype_oix_170518/rejectedphoto'));
                app.use('/prototype_oix_170518/throttle', require('./routes/prototype_oix_170518/throttle'));
                app.use('/prototype_oix_170518/payment', require('./routes/prototype_oix_170518/payment'));
                app.use('/prototype_oix_170518/submission-failed', require('./routes/prototype_oix_170518/submission-failed'));
                app.use('/prototype_oix_170518/sar', require('./routes/prototype_oix_170518/sar'));
                app.use('/prototype_oix_170518/photo-url', require('./routes/prototype_oix_170518/photo-url'));
                app.use('/prototype_oix_170518/photo-code', require('./routes/prototype_oix_170518/photo-code'));
                app.use('/prototype_oix_170518/oix', require('./routes/prototype_oix_170518/oix'));
                app.use('/prototype_oix_170518/intro-oix', require('./routes/prototype_oix_170518/intro-oix'));
                app.use('/prototype_oix_170518/photo-retrieved', require('./routes/prototype_oix_170518/photo-retrieved'));
                app.use('/prototype_oix_170518/startpage-oix', require('./routes/prototype_oix_170518/startpage-oix'));
                app.use('/prototype_oix_170518/filter-oix', require('./routes/prototype_oix_170518/filter-oix'));
                app.use('/prototype_oix_170518/filter-common-oix', require('./routes/prototype_oix_170518/filter-common-oix'));



                //prototype OIX 120518
                    app.use('/prototype_oix_170601/uploadphoto', require('./routes/prototype_oix_170601/uploadphoto'));
                    app.use('/prototype_oix_170601/filter-common', require('./routes/prototype_oix_170601/filter-common'));
                    app.use('/prototype_oix_170601/renew', require('./routes/prototype_oix_170601/renew'));
                    app.use('/prototype_oix_170601/intro', require('./routes/prototype_oix_170601/intro'));
                    app.use('/prototype_oix_170601/filter', require('./routes/prototype_oix_170601/filter'));
                    app.use('/prototype_oix_170601/startpage', require('./routes/prototype_oix_170601/startpage'));
                    app.use('/prototype_oix_170601/photoguide-short', require('./routes/prototype_oix_170601/photoguide-short'));
                    app.use('/prototype_oix_170601/photoguide-static', require('./routes/prototype_oix_170601/photoguide-static'));
                    app.use('/prototype_oix_170601/photoguide-shop', require('./routes/prototype_oix_170601/photoguide-shop'));
                    app.use('/prototype_oix_170601/takephoto', require('./routes/prototype_oix_170601/takephoto'));
                    app.use('/prototype_oix_170601/upload', require('./routes/prototype_oix_170601/upload'));
                    app.use('/prototype_oix_170601/rejectedphoto', require('./routes/prototype_oix_170601/rejectedphoto'));
                    app.use('/prototype_oix_170601/throttle', require('./routes/prototype_oix_170601/throttle'));
                    app.use('/prototype_oix_170601/payment', require('./routes/prototype_oix_170601/payment'));
                    app.use('/prototype_oix_170601/submission-failed', require('./routes/prototype_oix_170601/submission-failed'));
                    app.use('/prototype_oix_170601/sar', require('./routes/prototype_oix_170601/sar'));
                    app.use('/prototype_oix_170601/photo-url', require('./routes/prototype_oix_170601/photo-url'));
                    app.use('/prototype_oix_170601/photo-code', require('./routes/prototype_oix_170601/photo-code'));
                    app.use('/prototype_oix_170601/oix', require('./routes/prototype_oix_170601/oix'));
                    app.use('/prototype_oix_170601/intro-oix', require('./routes/prototype_oix_170601/intro-oix'));
                    app.use('/prototype_oix_170601/photo-retrieved', require('./routes/prototype_oix_170601/photo-retrieved'));
                    app.use('/prototype_oix_170601/startpage-oix', require('./routes/prototype_oix_170601/startpage-oix'));
                    app.use('/prototype_oix_170601/filter-oix', require('./routes/prototype_oix_170601/filter-oix'));
                    app.use('/prototype_oix_170601/filter-common-oix', require('./routes/prototype_oix_170601/filter-common-oix'));








        //prototype 170118
        app.use('/priority_service_170118/overseas', require('./routes/priority_service_170118/overseas'));
        app.use('/priority_service_170118/overseas-not-eligible', require('./routes/priority_service_170118/overseas-not-eligible'));
        app.use('/priority_service_170118/overseas-first', require('./routes/priority_service_170118/overseas-first'));
        app.use('/priority_service_170118/overseas-lost-change', require('./routes/priority_service_170118/overseas-lost-change'));          app.use('/priority_service_170118/uploadphoto', require('./routes/priority_service_170118/uploadphoto'));
        app.use('/priority_service_170118/filter-common', require('./routes/priority_service_170118/filter-common'))
        app.use('/priority_service_170118/renew', require('./routes/priority_service_170118/renew'));
        app.use('/priority_service_170118/intro', require('./routes/priority_service_170118/intro'));
        app.use('/priority_service_170118/filter', require('./routes/priority_service_170118/filter'));
        app.use('/priority_service_170118/startpage', require('./routes/priority_service_170118/startpage'));
        app.use('/priority_service_170118/startpage-overseas', require('./routes/priority_service_170118/startpage-overseas'));
        app.use('/priority_service_170118/photoguide-short', require('./routes/priority_service_170118/photoguide-short'));
        app.use('/priority_service_170118/photoguide-static', require('./routes/priority_service_170118/photoguide-static'));
        app.use('/priority_service_170118/photoguide-shop', require('./routes/priority_service_170118/photoguide-shop'));
        app.use('/priority_service_170118/takephoto', require('./routes/priority_service_170118/takephoto'));          app.use('/priority_service_170118/upload', require('./routes/priority_service_170118/upload'));
        app.use('/priority_service_170118/rejectedphoto', require('./routes/priority_service_170118/rejectedphoto'));
        app.use('/priority_service_170118/filter-common-temp', require('./routes/priority_service_170118/filter-common-temp'));
        app.use('/priority_service_170118/startpage-temp', require('./routes/priority_service_170118/startpage-temp'));
        app.use('/priority_service_170118/get-urgent-passport', require('./routes/priority_service_170118/get-urgent-passport'));
        app.use('/priority_service_170118/book-appointment', require('./routes/priority_service_170118/book-appointment'));
        app.use('/priority_service_170118/not-eligible', require('./routes/priority_service_170118/not-eligible'));


        //prototype 170202
        app.use('/priority_service_170202/overseas', require('./routes/priority_service_170202/overseas'));
        app.use('/priority_service_170202/overseas-not-eligible', require('./routes/priority_service_170202/overseas-not-eligible'));
        app.use('/priority_service_170202/overseas-first', require('./routes/priority_service_170202/overseas-first'));
        app.use('/priority_service_170202/overseas-lost-change', require('./routes/priority_service_170202/overseas-lost-change'));          app.use('/priority_service_170202/uploadphoto', require('./routes/priority_service_170202/uploadphoto'));
        app.use('/priority_service_170202/filter-common', require('./routes/priority_service_170202/filter-common'))
        app.use('/priority_service_170202/renew', require('./routes/priority_service_170202/renew'));
        app.use('/priority_service_170202/intro', require('./routes/priority_service_170202/intro'));
        app.use('/priority_service_170202/filter', require('./routes/priority_service_170202/filter'));
        app.use('/priority_service_170202/startpage', require('./routes/priority_service_170202/startpage'));
        app.use('/priority_service_170202/startpage-overseas', require('./routes/priority_service_170202/startpage-overseas'));
        app.use('/priority_service_170202/photoguide-short', require('./routes/priority_service_170202/photoguide-short'));
        app.use('/priority_service_170202/photoguide-static', require('./routes/priority_service_170202/photoguide-static'));
        app.use('/priority_service_170202/photoguide-shop', require('./routes/priority_service_170202/photoguide-shop'));
        app.use('/priority_service_170202/takephoto', require('./routes/priority_service_170202/takephoto'));          app.use('/priority_service_170202/upload', require('./routes/priority_service_170202/upload'));
        app.use('/priority_service_170202/rejectedphoto', require('./routes/priority_service_170202/rejectedphoto'));
        app.use('/priority_service_170202/filter-common-temp', require('./routes/priority_service_170202/filter-common-temp'));
        app.use('/priority_service_170202/startpage-temp', require('./routes/priority_service_170202/startpage-temp'));
        app.use('/priority_service_170202/get-urgent-passport', require('./routes/priority_service_170202/get-urgent-passport'));
        app.use('/priority_service_170202/book-appointment', require('./routes/priority_service_170202/book-appointment'));
        app.use('/priority_service_170202/not-eligible', require('./routes/priority_service_170202/not-eligible'));


        //prototype 170215
        app.use('/priority_service_170215/overseas', require('./routes/priority_service_170215/overseas'));
        app.use('/priority_service_170215/overseas-not-eligible', require('./routes/priority_service_170215/overseas-not-eligible'));
        app.use('/priority_service_170215/overseas-first', require('./routes/priority_service_170215/overseas-first'));
        app.use('/priority_service_170215/overseas-lost-change', require('./routes/priority_service_170215/overseas-lost-change'));
        app.use('/priority_service_170215/uploadphoto', require('./routes/priority_service_170215/uploadphoto'));
        app.use('/priority_service_170215/filter-common', require('./routes/priority_service_170215/filter-common'))
        app.use('/priority_service_170215/renew', require('./routes/priority_service_170215/renew'));
        app.use('/priority_service_170215/intro', require('./routes/priority_service_170215/intro'));
        app.use('/priority_service_170215/filter', require('./routes/priority_service_170215/filter'));
        app.use('/priority_service_170215/startpage', require('./routes/priority_service_170215/startpage'));
        app.use('/priority_service_170215/startpage-overseas', require('./routes/priority_service_170215/startpage-overseas'));
        app.use('/priority_service_170215/photoguide-short', require('./routes/priority_service_170215/photoguide-short'));
        app.use('/priority_service_170215/photoguide-static', require('./routes/priority_service_170215/photoguide-static'));
        app.use('/priority_service_170215/photoguide-shop', require('./routes/priority_service_170215/photoguide-shop'));
        app.use('/priority_service_170215/takephoto', require('./routes/priority_service_170215/takephoto'));
        app.use('/priority_service_170215/upload', require('./routes/priority_service_170215/upload'));
        app.use('/priority_service_170215/rejectedphoto', require('./routes/priority_service_170215/rejectedphoto'));
        app.use('/priority_service_170215/filter-common-temp', require('./routes/priority_service_170215/filter-common-temp'));
        app.use('/priority_service_170215/startpage-temp', require('./routes/priority_service_170215/startpage-temp'));
        app.use('/priority_service_170215/get-urgent-passport', require('./routes/priority_service_170215/get-urgent-passport'));
        app.use('/priority_service_170215/book-appointment', require('./routes/priority_service_170215/book-appointment'));
        app.use('/priority_service_170215/not-eligible', require('./routes/priority_service_170215/not-eligible'));
        app.use('/priority_service_170215/timeout', require('./routes/priority_service_170215/timeout'));

        //prototype 170301
        app.use('/priority_service_170301/overseas', require('./routes/priority_service_170301/overseas'));
        app.use('/priority_service_170301/overseas-not-eligible', require('./routes/priority_service_170301/overseas-not-eligible'));
        app.use('/priority_service_170301/overseas-first', require('./routes/priority_service_170301/overseas-first'));
        app.use('/priority_service_170301/overseas-lost-change', require('./routes/priority_service_170301/overseas-lost-change'));
        app.use('/priority_service_170301/uploadphoto', require('./routes/priority_service_170301/uploadphoto'));
        app.use('/priority_service_170301/filter-common', require('./routes/priority_service_170301/filter-common'))
        app.use('/priority_service_170301/renew', require('./routes/priority_service_170301/renew'));
        app.use('/priority_service_170301/intro', require('./routes/priority_service_170301/intro'));
        app.use('/priority_service_170301/filter', require('./routes/priority_service_170301/filter'));
        app.use('/priority_service_170301/startpage', require('./routes/priority_service_170301/startpage'));
        app.use('/priority_service_170301/startpage-overseas', require('./routes/priority_service_170301/startpage-overseas'));
        app.use('/priority_service_170301/photoguide-short', require('./routes/priority_service_170301/photoguide-short'));
        app.use('/priority_service_170301/photoguide-static', require('./routes/priority_service_170301/photoguide-static'));
        app.use('/priority_service_170301/photoguide-shop', require('./routes/priority_service_170301/photoguide-shop'));
        app.use('/priority_service_170301/takephoto', require('./routes/priority_service_170301/takephoto'));
        app.use('/priority_service_170301/upload', require('./routes/priority_service_170301/upload'));
        app.use('/priority_service_170301/rejectedphoto', require('./routes/priority_service_170301/rejectedphoto'));
        app.use('/priority_service_170301/filter-common-temp', require('./routes/priority_service_170301/filter-common-temp'));
        app.use('/priority_service_170301/startpage-temp', require('./routes/priority_service_170301/startpage-temp'));
        app.use('/priority_service_170301/get-urgent-passport', require('./routes/priority_service_170301/get-urgent-passport'));
        app.use('/priority_service_170301/book-appointment', require('./routes/priority_service_170301/book-appointment'));
        app.use('/priority_service_170301/not-eligible', require('./routes/priority_service_170301/not-eligible'));
        app.use('/priority_service_170301/timeout', require('./routes/priority_service_170301/timeout'));

        //prototype 170315
        app.use('/priority_service_170315/overseas', require('./routes/priority_service_170315/overseas'));
        app.use('/priority_service_170315/overseas-not-eligible', require('./routes/priority_service_170315/overseas-not-eligible'));
        app.use('/priority_service_170315/overseas-first', require('./routes/priority_service_170315/overseas-first'));
        app.use('/priority_service_170315/overseas-lost-change', require('./routes/priority_service_170315/overseas-lost-change'));
        app.use('/priority_service_170315/uploadphoto', require('./routes/priority_service_170315/uploadphoto'));
        app.use('/priority_service_170315/filter-common', require('./routes/priority_service_170315/filter-common'))
        app.use('/priority_service_170315/renew', require('./routes/priority_service_170315/renew'));
        app.use('/priority_service_170315/intro', require('./routes/priority_service_170315/intro'));
        app.use('/priority_service_170315/filter', require('./routes/priority_service_170315/filter'));
        app.use('/priority_service_170315/startpage', require('./routes/priority_service_170315/startpage'));
        app.use('/priority_service_170315/startpage-overseas', require('./routes/priority_service_170315/startpage-overseas'));
        app.use('/priority_service_170315/photoguide-short', require('./routes/priority_service_170315/photoguide-short'));
        app.use('/priority_service_170315/photoguide-static', require('./routes/priority_service_170315/photoguide-static'));
        app.use('/priority_service_170315/photoguide-shop', require('./routes/priority_service_170315/photoguide-shop'));
        app.use('/priority_service_170315/takephoto', require('./routes/priority_service_170315/takephoto'));
        app.use('/priority_service_170315/upload', require('./routes/priority_service_170315/upload'));
        app.use('/priority_service_170315/rejectedphoto', require('./routes/priority_service_170315/rejectedphoto'));
        app.use('/priority_service_170315/filter-common-temp', require('./routes/priority_service_170315/filter-common-temp'));
        app.use('/priority_service_170315/startpage-temp', require('./routes/priority_service_170315/startpage-temp'));
        app.use('/priority_service_170315/get-urgent-passport', require('./routes/priority_service_170315/get-urgent-passport'));
        app.use('/priority_service_170315/book-appointment', require('./routes/priority_service_170315/book-appointment'));
        app.use('/priority_service_170315/not-eligible', require('./routes/priority_service_170315/not-eligible'));
        app.use('/priority_service_170315/timeout', require('./routes/priority_service_170315/timeout'));

        //prototype 170330
        app.use('/priority_service_170330/overseas', require('./routes/priority_service_170330/overseas'));
        app.use('/priority_service_170330/overseas-not-eligible', require('./routes/priority_service_170330/overseas-not-eligible'));
        app.use('/priority_service_170330/overseas-first', require('./routes/priority_service_170330/overseas-first'));
        app.use('/priority_service_170330/overseas-lost-change', require('./routes/priority_service_170330/overseas-lost-change'));
        app.use('/priority_service_170330/uploadphoto', require('./routes/priority_service_170330/uploadphoto'));
        app.use('/priority_service_170330/filter-common', require('./routes/priority_service_170330/filter-common'))
        app.use('/priority_service_170330/renew', require('./routes/priority_service_170330/renew'));
        app.use('/priority_service_170330/intro', require('./routes/priority_service_170330/intro'));
        app.use('/priority_service_170330/filter', require('./routes/priority_service_170330/filter'));
        app.use('/priority_service_170330/startpage', require('./routes/priority_service_170330/startpage'));
        app.use('/priority_service_170330/startpage-overseas', require('./routes/priority_service_170330/startpage-overseas'));
        app.use('/priority_service_170330/photoguide-short', require('./routes/priority_service_170330/photoguide-short'));
        app.use('/priority_service_170330/photoguide-static', require('./routes/priority_service_170330/photoguide-static'));
        app.use('/priority_service_170330/photoguide-shop', require('./routes/priority_service_170330/photoguide-shop'));
        app.use('/priority_service_170330/takephoto', require('./routes/priority_service_170330/takephoto'));
        app.use('/priority_service_170330/upload', require('./routes/priority_service_170330/upload'));
        app.use('/priority_service_170330/rejectedphoto', require('./routes/priority_service_170330/rejectedphoto'));
        app.use('/priority_service_170330/filter-common-temp', require('./routes/priority_service_170330/filter-common-temp'));
        app.use('/priority_service_170330/startpage-temp', require('./routes/priority_service_170330/startpage-temp'));
        app.use('/priority_service_170330/get-urgent-passport', require('./routes/priority_service_170330/get-urgent-passport'));
        app.use('/priority_service_170330/book-appointment', require('./routes/priority_service_170330/book-appointment'));
        app.use('/priority_service_170330/not-eligible', require('./routes/priority_service_170330/not-eligible'));
        app.use('/priority_service_170330/timeout', require('./routes/priority_service_170330/timeout'));

        //prototype 170419
        app.use('/priority_service_170419/overseas', require('./routes/priority_service_170419/overseas'));
        app.use('/priority_service_170419/overseas-not-eligible', require('./routes/priority_service_170419/overseas-not-eligible'));
        app.use('/priority_service_170419/overseas-first', require('./routes/priority_service_170419/overseas-first'));
        app.use('/priority_service_170419/overseas-lost-change', require('./routes/priority_service_170419/overseas-lost-change'));
        app.use('/priority_service_170419/uploadphoto', require('./routes/priority_service_170419/uploadphoto'));
        app.use('/priority_service_170419/filter-common', require('./routes/priority_service_170419/filter-common'))
        app.use('/priority_service_170419/renew', require('./routes/priority_service_170419/renew'));
        app.use('/priority_service_170419/intro', require('./routes/priority_service_170419/intro'));
        app.use('/priority_service_170419/filter', require('./routes/priority_service_170419/filter'));
        app.use('/priority_service_170419/startpage', require('./routes/priority_service_170419/startpage'));
        app.use('/priority_service_170419/startpage-overseas', require('./routes/priority_service_170419/startpage-overseas'));
        app.use('/priority_service_170419/photoguide-short', require('./routes/priority_service_170419/photoguide-short'));
        app.use('/priority_service_170419/photoguide-static', require('./routes/priority_service_170419/photoguide-static'));
        app.use('/priority_service_170419/photoguide-shop', require('./routes/priority_service_170419/photoguide-shop'));
        app.use('/priority_service_170419/takephoto', require('./routes/priority_service_170419/takephoto'));
        app.use('/priority_service_170419/upload', require('./routes/priority_service_170419/upload'));
        app.use('/priority_service_170419/rejectedphoto', require('./routes/priority_service_170419/rejectedphoto'));
        app.use('/priority_service_170419/filter-common-temp', require('./routes/priority_service_170419/filter-common-temp'));
        app.use('/priority_service_170419/startpage-temp', require('./routes/priority_service_170419/startpage-temp'));
        app.use('/priority_service_170419/get-urgent-passport', require('./routes/priority_service_170419/get-urgent-passport'));
        app.use('/priority_service_170419/book-appointment', require('./routes/priority_service_170419/book-appointment'));
        app.use('/priority_service_170419/not-eligible', require('./routes/priority_service_170419/not-eligible'));
        app.use('/priority_service_170419/timeout', require('./routes/priority_service_170419/timeout'));


        //prototype 170419
        app.use('/priority_service_170510/overseas', require('./routes/priority_service_170510/overseas'));
        app.use('/priority_service_170510/overseas-not-eligible', require('./routes/priority_service_170510/overseas-not-eligible'));
        app.use('/priority_service_170510/overseas-first', require('./routes/priority_service_170510/overseas-first'));
        app.use('/priority_service_170510/overseas-lost-change', require('./routes/priority_service_170510/overseas-lost-change'));
        app.use('/priority_service_170510/uploadphoto', require('./routes/priority_service_170510/uploadphoto'));
        app.use('/priority_service_170510/filter-common', require('./routes/priority_service_170510/filter-common'))
        app.use('/priority_service_170510/renew', require('./routes/priority_service_170510/renew'));
        app.use('/priority_service_170510/intro', require('./routes/priority_service_170510/intro'));
        app.use('/priority_service_170510/filter', require('./routes/priority_service_170510/filter'));
        app.use('/priority_service_170510/startpage', require('./routes/priority_service_170510/startpage'));
        app.use('/priority_service_170510/startpage-overseas', require('./routes/priority_service_170510/startpage-overseas'));
        app.use('/priority_service_170510/photoguide-short', require('./routes/priority_service_170510/photoguide-short'));
        app.use('/priority_service_170510/photoguide-static', require('./routes/priority_service_170510/photoguide-static'));
        app.use('/priority_service_170510/photoguide-shop', require('./routes/priority_service_170510/photoguide-shop'));
        app.use('/priority_service_170510/takephoto', require('./routes/priority_service_170510/takephoto'));
        app.use('/priority_service_170510/upload', require('./routes/priority_service_170510/upload'));
        app.use('/priority_service_170510/rejectedphoto', require('./routes/priority_service_170510/rejectedphoto'));
        app.use('/priority_service_170510/filter-common-temp', require('./routes/priority_service_170510/filter-common-temp'));
        app.use('/priority_service_170510/startpage-temp', require('./routes/priority_service_170510/startpage-temp'));
        app.use('/priority_service_170510/get-urgent-passport', require('./routes/priority_service_170510/get-urgent-passport'));
        app.use('/priority_service_170510/book-appointment', require('./routes/priority_service_170510/book-appointment'));
        app.use('/priority_service_170510/not-eligible', require('./routes/priority_service_170510/not-eligible'));
        app.use('/priority_service_170510/timeout', require('./routes/priority_service_170510/timeout'));
        app.use('/priority_service_170510/no-appointment', require('./routes/priority_service_170510/no-appointment'));

        //prototype 170419
        app.use('/priority_service_170705/overseas', require('./routes/priority_service_170705/overseas'));
        app.use('/priority_service_170705/overseas-not-eligible', require('./routes/priority_service_170705/overseas-not-eligible'));
        app.use('/priority_service_170705/overseas-first', require('./routes/priority_service_170705/overseas-first'));
        app.use('/priority_service_170705/overseas-lost-change', require('./routes/priority_service_170705/overseas-lost-change'));
        app.use('/priority_service_170705/uploadphoto', require('./routes/priority_service_170705/uploadphoto'));
        app.use('/priority_service_170705/filter-common', require('./routes/priority_service_170705/filter-common'))
        app.use('/priority_service_170705/renew', require('./routes/priority_service_170705/renew'));
        app.use('/priority_service_170705/intro', require('./routes/priority_service_170705/intro'));
        app.use('/priority_service_170705/filter', require('./routes/priority_service_170705/filter'));
        app.use('/priority_service_170705/startpage', require('./routes/priority_service_170705/startpage'));
        app.use('/priority_service_170705/startpage-overseas', require('./routes/priority_service_170705/startpage-overseas'));
        app.use('/priority_service_170705/photoguide-short', require('./routes/priority_service_170705/photoguide-short'));
        app.use('/priority_service_170705/photoguide-static', require('./routes/priority_service_170705/photoguide-static'));
        app.use('/priority_service_170705/photoguide-shop', require('./routes/priority_service_170705/photoguide-shop'));
        app.use('/priority_service_170705/takephoto', require('./routes/priority_service_170705/takephoto'));
        app.use('/priority_service_170705/upload', require('./routes/priority_service_170705/upload'));
        app.use('/priority_service_170705/rejectedphoto', require('./routes/priority_service_170705/rejectedphoto'));
        app.use('/priority_service_170705/filter-common-temp', require('./routes/priority_service_170705/filter-common-temp'));
        app.use('/priority_service_170705/startpage-temp', require('./routes/priority_service_170705/startpage-temp'));
        app.use('/priority_service_170705/get-urgent-passport', require('./routes/priority_service_170705/get-urgent-passport'));
        app.use('/priority_service_170705/book-appointment', require('./routes/priority_service_170705/book-appointment'));
        app.use('/priority_service_170705/not-eligible', require('./routes/priority_service_170705/not-eligible'));
        app.use('/priority_service_170705/timeout', require('./routes/priority_service_170705/timeout'));
        app.use('/priority_service_170705/no-appointment', require('./routes/priority_service_170705/no-appointment'));
        app.use('/priority_service_170705/service-intro', require('./routes/priority_service_170705/service-intro'));

        //prototype 170731
        app.use('/priority_service_170731/overseas', require('./routes/priority_service_170731/overseas'));
        app.use('/priority_service_170731/overseas-not-eligible', require('./routes/priority_service_170731/overseas-not-eligible'));
        app.use('/priority_service_170731/overseas-first', require('./routes/priority_service_170731/overseas-first'));
        app.use('/priority_service_170731/overseas-lost-change', require('./routes/priority_service_170731/overseas-lost-change'));
        app.use('/priority_service_170731/uploadphoto', require('./routes/priority_service_170731/uploadphoto'));
        app.use('/priority_service_170731/filter-common', require('./routes/priority_service_170731/filter-common'))
        app.use('/priority_service_170731/renew', require('./routes/priority_service_170731/renew'));
        app.use('/priority_service_170731/intro', require('./routes/priority_service_170731/intro'));
        app.use('/priority_service_170731/filter', require('./routes/priority_service_170731/filter'));
        app.use('/priority_service_170731/startpage', require('./routes/priority_service_170731/startpage'));
        app.use('/priority_service_170731/startpage-overseas', require('./routes/priority_service_170731/startpage-overseas'));
        app.use('/priority_service_170731/photoguide-short', require('./routes/priority_service_170731/photoguide-short'));
        app.use('/priority_service_170731/photoguide-static', require('./routes/priority_service_170731/photoguide-static'));
        app.use('/priority_service_170731/photoguide-shop', require('./routes/priority_service_170731/photoguide-shop'));
        app.use('/priority_service_170731/takephoto', require('./routes/priority_service_170731/takephoto'));
        app.use('/priority_service_170731/upload', require('./routes/priority_service_170731/upload'));
        app.use('/priority_service_170731/rejectedphoto', require('./routes/priority_service_170731/rejectedphoto'));
        app.use('/priority_service_170731/filter-common-temp', require('./routes/priority_service_170731/filter-common-temp'));
        app.use('/priority_service_170731/startpage-temp', require('./routes/priority_service_170731/startpage-temp'));
        app.use('/priority_service_170731/get-urgent-passport', require('./routes/priority_service_170731/get-urgent-passport'));
        app.use('/priority_service_170731/book-appointment', require('./routes/priority_service_170731/book-appointment'));
        app.use('/priority_service_170731/not-eligible', require('./routes/priority_service_170731/not-eligible'));
        app.use('/priority_service_170731/timeout', require('./routes/priority_service_170731/timeout'));
        app.use('/priority_service_170731/no-appointment', require('./routes/priority_service_170731/no-appointment'));
        app.use('/priority_service_170731/service-intro', require('./routes/priority_service_170731/service-intro'));


    //Priority service
    app.use('/priority-service', require('./routes/priority-service'));
    app.use('/priority-service-filter-common', require('./routes/priority-service/filter-common'));
    app.use('/priority-service-filter', require('./routes/priority-service/filter'));
    app.use('/priority-service-intro', require('./routes/priority-service/intro'));
    app.use('/not-eligible', require('./routes/priority-service/not-eligible'));
    //Priority service-161221
    app.use('/priority-service-161221', require('./routes/priority-service-161221'));
    app.use('/priority-service-161221-filter-common', require('./routes/priority-service-161221/filter-common'));
    app.use('/priority-service-161221/filter', require('./routes/priority-service-161221/filter'));
    app.use('/priority-service-161221/intro', require('./routes/priority-service-161221/intro'));
    app.use('/not-eligible', require('./routes/priority-service-161221/not-eligible'));
    //Priority service-170118
    app.use('/priority-service-170118', require('./routes/priority-service-170118'));
    app.use('/priority-service-170118-filter-common', require('./routes/priority-service-170118/filter-common'));
    app.use('/priority-service-170118/filter', require('./routes/priority-service-170118/filter'));
    app.use('/priority-service-170118/intro', require('./routes/priority-service-170118/intro'));
    app.use('/not-eligible', require('./routes/priority-service-170118/not-eligible'));


    //How to
    app.use('/how-to', require('./routes/how-to'));

    //Gov.uk pages
    app.use('/govuk', require('./routes/govuk'));

    //Tracking
    app.use('/tracking', require('./routes/tracking'));
    app.use('/tracking-ovs', require('./routes/tracking-ovs'));
    app.use('/tracking-email', require('./routes/tracking-email'));
    app.use('/tracking-dps', require('./routes/tracking-dps'));

    //Csig 170601
    app.use('/csig_170601/user', require('./routes/csig_170601/user'));
    app.use('/csig_170601/referee', require('./routes/csig_170601/referee'));

    //Csig 170731
    app.use('/csig_170731/user', require('./routes/csig_170731/user'));
    app.use('/csig_170731/start', require('./routes/csig_170731/start'));
    app.use('/csig_170731/referee', require('./routes/csig_170731/referee'));
    app.use('/csig_170731/referee-5', require('./routes/csig_170731/referee-5'));


    //3rd party shops photo checker
    app.use('/shops-photo-checker', require('./routes/shops-photo-checker'));

    // Examples
    app.use('/static', require('./routes/static'));
    app.use('/forms', require('./routes/forms'));
    app.use('/sar', require('./routes/sar'));
    app.use('/typeahead', require('./routes/typeahead'));

    // CSig
    app.use('/csig', require('./routes/csig'));


    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log('App listening on port %s', port);
}
