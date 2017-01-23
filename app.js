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

    //Tracking
    app.use('/tracking', require('./routes/tracking'));

    //3rd party shops photo checker
    app.use('/shops-photo-checker', require('./routes/shops-photo-checker'));

    // Examples
    app.use('/static', require('./routes/static'));
    app.use('/forms', require('./routes/forms'));
    app.use('/sar', require('./routes/sar'));
    app.use('/typeahead', require('./routes/typeahead'));


    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log('App listening on port %s', port);
}
