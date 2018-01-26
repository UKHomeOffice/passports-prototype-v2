
// routes
app.use(require('./routes/start'));

// production
app.use('/production/overseas', require('./routes/production/overseas'));
app.use('/production/overseas-not-eligible', require('./routes/production/overseas-not-eligible'));
app.use('/production/overseas-first', require('./routes/production/overseas-first'));
app.use('/production/overseas-lost-change', require('./routes/production/overseas-lost-change'));
app.use('/production/uploadphoto', require('./routes/production/uploadphoto'));
app.use('/production/uploadphoto-oix', require('./routes/production/uploadphoto-oix'));
app.use('/production/renew', require('./routes/production/renew'));
app.use('/production/intro', require('./routes/production/intro'));
app.use('/production/filter', require('./routes/production/filter'));
app.use('/production/startpage', require('./routes/production/startpage'));
app.use('/production/startpage-overseas', require('./routes/production/startpage-overseas'));
app.use('/production/photoguide-short', require('./routes/production/photoguide-short'));
app.use('/production/photoguide-static', require('./routes/production/photoguide-static'));
app.use('/production/photoguide-shop', require('./routes/production/photoguide-shop'));
app.use('/production/takephoto', require('./routes/production/takephoto'));
app.use('/production/upload', require('./routes/production/upload'));
app.use('/production/rejectedphoto', require('./routes/production/rejectedphoto'));
app.use('/production/filter-common-temp', require('./routes/production/filter-common-temp'));
app.use('/production/startpage-temp', require('./routes/production/startpage-temp'));
app.use('/production/overseas-not-available', require('./routes/production/overseas-not-available'));
app.use('/production/throttle', require('./routes/production/throttle'));
app.use('/production/payment', require('./routes/production/payment'));
app.use('/production/submission-failed', require('./routes/production/submission-failed'));
app.use('/production/sar', require('./routes/production/sar'));
app.use('/production/photo-url', require('./routes/production/photo-url'));
app.use('/production/photo-code', require('./routes/production/photo-code'));
app.use('/production/mismatch', require('./routes/production/mismatch'));
app.use('/production/redirect-tracking', require('./routes/production/redirect-tracking'));

// 12_15s
app.use('/12_15s/overseas', require('./routes/12_15s/overseas'));
app.use('/12_15s/overseas-not-eligible', require('./routes/12_15s/overseas-not-eligible'));
app.use('/12_15s/overseas-first', require('./routes/12_15s/overseas-first'));
app.use('/12_15s/overseas-lost-change', require('./routes/12_15s/overseas-lost-change'));
app.use('/12_15s/uploadphoto', require('./routes/12_15s/uploadphoto'));
app.use('/12_15s/uploadphoto-oix', require('./routes/12_15s/uploadphoto-oix'));
app.use('/12_15s/renew', require('./routes/12_15s/renew'));
app.use('/12_15s/intro', require('./routes/12_15s/intro'));
app.use('/12_15s/filter', require('./routes/12_15s/filter'));
app.use('/12_15s/startpage', require('./routes/12_15s/startpage'));
app.use('/12_15s/startpage-overseas', require('./routes/12_15s/startpage-overseas'));
app.use('/12_15s/photoguide-short', require('./routes/12_15s/photoguide-short'));
app.use('/12_15s/photoguide-static', require('./routes/12_15s/photoguide-static'));
app.use('/12_15s/photoguide-shop', require('./routes/12_15s/photoguide-shop'));
app.use('/12_15s/takephoto', require('./routes/12_15s/takephoto'));
app.use('/12_15s/upload', require('./routes/12_15s/upload'));
app.use('/12_15s/rejectedphoto', require('./routes/12_15s/rejectedphoto'));
app.use('/12_15s/filter-common-temp', require('./routes/12_15s/filter-common-temp'));
app.use('/12_15s/startpage-temp', require('./routes/12_15s/startpage-temp'));
app.use('/12_15s/overseas-not-available', require('./routes/12_15s/overseas-not-available'));
app.use('/12_15s/throttle', require('./routes/12_15s/throttle'));
app.use('/12_15s/payment', require('./routes/12_15s/payment'));
app.use('/12_15s/submission-failed', require('./routes/12_15s/submission-failed'));
app.use('/12_15s/sar', require('./routes/12_15s/sar'));
app.use('/12_15s/photo-url', require('./routes/12_15s/photo-url'));
app.use('/12_15s/photo-code', require('./routes/12_15s/photo-code'));
app.use('/12_15s/mismatch', require('./routes/12_15s/mismatch'));
app.use('/12_15s/redirect-tracking', require('./routes/12_15s/redirect-tracking'));

//csig
app.use('/csig/user', require('./routes/csig/user'));
app.use('/csig/user-send-book', require('./routes/csig/user-send-book'));
app.use('/csig/csig', require('./routes/csig/csig'));
app.use('/csig/start', require('./routes/csig/start'));
app.use('/csig/referee', require('./routes/csig/referee'));
app.use('/csig/referee-5', require('./routes/csig/referee-5'));
app.use('/confirm-identity', require('./routes/csig/referee-5'));
app.use('/track', require('./routes/csig/user'));

//Tracking
app.use('/tracking', require('./routes/tracking'));
