// routes
app.use(require('./routes/start'));
app.use(require('./routes/guidance'));

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

// FTAs
app.use('/prototype/overseas', require('./routes/prototype/overseas'));
app.use('/prototype/overseas-not-eligible', require('./routes/prototype/overseas-not-eligible'));
app.use('/prototype/overseas-first', require('./routes/prototype/overseas-first'));
app.use('/prototype/overseas-lost-change', require('./routes/prototype/overseas-lost-change'));
app.use('/prototype/uploadphoto', require('./routes/prototype/uploadphoto'));
app.use('/prototype/uploadphoto-child', require('./routes/prototype/uploadphoto-child'));
app.use('/prototype/apply', require('./routes/prototype/apply'));
app.use('/prototype/intro', require('./routes/prototype/intro'));
app.use('/prototype/filter', require('./routes/prototype/filter'));
app.use('/prototype/startpage', require('./routes/prototype/startpage'));
app.use('/prototype/startpage-overseas', require('./routes/prototype/startpage-overseas'));
app.use('/prototype/photoguide-short', require('./routes/prototype/photoguide-short'));
app.use('/prototype/photoguide-static', require('./routes/prototype/photoguide-static'));
app.use('/prototype/photoguide-shop', require('./routes/prototype/photoguide-shop'));
app.use('/prototype/takephoto', require('./routes/prototype/takephoto'));
app.use('/prototype/upload', require('./routes/prototype/upload'));
app.use('/prototype/rejectedphoto', require('./routes/prototype/rejectedphoto'));
app.use('/prototype/filter-common-temp', require('./routes/prototype/filter-common-temp'));
app.use('/prototype/startpage-temp', require('./routes/prototype/startpage-temp'));
app.use('/prototype/overseas-not-available', require('./routes/prototype/overseas-not-available'));
app.use('/prototype/throttle', require('./routes/prototype/throttle'));
app.use('/prototype/payment', require('./routes/prototype/payment'));
app.use('/prototype/submission-failed', require('./routes/prototype/submission-failed'));
app.use('/prototype/sar', require('./routes/prototype/sar'));
app.use('/prototype/photo-url', require('./routes/prototype/photo-url'));
app.use('/prototype/photo-code', require('./routes/prototype/photo-code'));
app.use('/prototype/mismatch', require('./routes/prototype/mismatch'));
app.use('/prototype/redirect-tracking', require('./routes/prototype/redirect-tracking'));

// Temporary routes for changing:
// `/ftas` to `/prototype`
// `/renew` to `/apply`
// to make sure any URLs don't get broken
app.get('/ftas*', function(req, res) {
    res.redirect('/prototype' + req.params[0]);
});
app.get('/prototype/renew*', function(req, res) {
    res.redirect('/prototype/apply' + req.params[0]);
});

//csig
app.use('/csig/track', require('./routes/csig/track'));
app.use('/csig/user', require('./routes/csig/user'));
app.use('/csig/user-send-book', require('./routes/csig/user-send-book'));
app.use('/csig/user-renominate', require('./routes/csig/user-renominate'));
app.use('/csig/user-renominate-anytime', require('./routes/csig/user-renominate-anytime'));
app.use('/csig/user-contact', require('./routes/csig/user-contact'));
app.use('/csig/start', require('./routes/csig/start'));
app.use('/csig/referee', require('./routes/csig/referee'));
app.use('/csig/referee-5', require('./routes/csig/referee-5'));
app.use('/confirm-identity', require('./routes/csig/referee-5'));
app.use('/track', require('./routes/csig/user'));

//Tracking
app.use('/tracking', require('./routes/tracking'));

//DPS Tracking
app.use('/tracking-dps', require('./routes/tracking-dps'));

//Change Of Name Tracking
app.use('/tracking-con', require('./routes/tracking-con'));

//Post Office Digital (POD) tracking
app.use('/pod', require('./routes/pod'));

//How to
app.use('/how-to', require('./routes/how-to'));

// Address Capture
app.use('/address/overseas', require('./routes/address/overseas'));
app.use('/address/overseas-not-eligible', require('./routes/address/overseas-not-eligible'));
app.use('/address/overseas-first', require('./routes/address/overseas-first'));
app.use('/address/overseas-lost-change', require('./routes/address/overseas-lost-change'));
app.use('/address/uploadphoto', require('./routes/address/uploadphoto'));
app.use('/address/uploadphoto-oix', require('./routes/address/uploadphoto-oix'));
app.use('/address/renew', require('./routes/address/renew'));
app.use('/address/intro', require('./routes/address/intro'));
app.use('/address/filter', require('./routes/address/filter'));
app.use('/address/startpage', require('./routes/address/startpage'));
app.use('/address/startpage-overseas', require('./routes/address/startpage-overseas'));
app.use('/address/photoguide-short', require('./routes/address/photoguide-short'));
app.use('/address/photoguide-static', require('./routes/address/photoguide-static'));
app.use('/address/photoguide-shop', require('./routes/address/photoguide-shop'));
app.use('/address/takephoto', require('./routes/address/takephoto'));
app.use('/address/upload', require('./routes/address/upload'));
app.use('/address/rejectedphoto', require('./routes/address/rejectedphoto'));
app.use('/address/filter-common-temp', require('./routes/address/filter-common-temp'));
app.use('/address/startpage-temp', require('./routes/address/startpage-temp'));
app.use('/address/overseas-not-available', require('./routes/address/overseas-not-available'));
app.use('/address/throttle', require('./routes/address/throttle'));
app.use('/address/payment', require('./routes/address/payment'));
app.use('/address/submission-failed', require('./routes/address/submission-failed'));
app.use('/address/sar', require('./routes/address/sar'));
app.use('/address/photo-url', require('./routes/address/photo-url'));
app.use('/address/photo-code', require('./routes/address/photo-code'));
app.use('/address/mismatch', require('./routes/address/mismatch'));
app.use('/address/redirect-tracking', require('./routes/address/redirect-tracking'));


// Priority Service (DPS)
// app.use('/priority-service/overseas', require('./routes/priority-service/overseas'));
// app.use('/priority-service/overseas-not-eligible', require('./routes/priority-service/overseas-not-eligible'));
// app.use('/priority-service/overseas-first', require('./routes/priority-service/overseas-first'));
// app.use('/priority-service/overseas-lost-change', require('./routes/priority-service/overseas-lost-change'));
// app.use('/priority-service/uploadphoto', require('./routes/priority-service/uploadphoto'));
// app.use('/priority-service/filter-common', require('./routes/priority-service/filter-common'))
// app.use('/priority-service/renew', require('./routes/priority-service/renew'));
// app.use('/priority-service/intro', require('./routes/priority-service/intro'));
// app.use('/priority-service/filter', require('./routes/priority-service/filter'));
// app.use('/priority-service/startpage', require('./routes/priority-service/startpage'));
// app.use('/priority-service/startpage-overseas', require('./routes/priority-service/startpage-overseas'));
// app.use('/priority-service/photoguide-short', require('./routes/priority-service/photoguide-short'));
// app.use('/priority-service/photoguide-static', require('./routes/priority-service/photoguide-static'));
// app.use('/priority-service/photoguide-shop', require('./routes/priority-service/photoguide-shop'));
// app.use('/priority-service/takephoto', require('./routes/priority-service/takephoto'));
// app.use('/priority-service/upload', require('./routes/priority-service/upload'));
// app.use('/priority-service/rejectedphoto', require('./routes/priority-service/rejectedphoto'));
// app.use('/priority-service/filter-common-temp', require('./routes/priority-service/filter-common-temp'));
// app.use('/priority-service/startpage-temp', require('./routes/priority-service/startpage-temp'));
// app.use('/priority-service/get-urgent-passport', require('./routes/priority-service/get-urgent-passport'));
// app.use('/priority-service/book-appointment', require('./routes/priority-service/book-appointment'));
// app.use('/priority-service/not-eligible', require('./routes/priority-service/not-eligible'));
// app.use('/priority-service/timeout', require('./routes/priority-service/timeout'));
// app.use('/priority-service/no-appointment', require('./routes/priority-service/no-appointment'));
// app.use('/priority-service/service-intro', require('./routes/priority-service/service-intro'));

// Temporary route to dps next steps page
app.get('/priority-service/confirmation', function (req, res) {
    res.render('priority-service/renew/confirmation');
})

// Temporary route to overseas next steps page
app.get('/overseas/confirmation', function (req, res) {
    res.render('priority-service/renew/confirmation');
})

//Gov.uk pages
app.use('/govuk', require('./routes/govuk'));
app.use('/govuk/damaged', require('./routes/govuk/damaged'));