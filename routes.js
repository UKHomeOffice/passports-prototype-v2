// routes
app.use(require('./routes/start'));
app.use(require('./routes/guidance'));

// DCS user journeys
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
app.get('/ftas*', (req, res) => {
    res.redirect('/prototype' + req.params[0]);
});
app.get('/prototype/renew*', (req, res) => {
    res.redirect('/prototype/apply' + req.params[0]);
});

//old csig routes > Redirecting to new tracking routes with query params attached
app.use('/csig/user*', (req, res) => {
    var i = req.url.indexOf('?');
    var query = req.url.substr(i + 1);
    res.redirect('/tracking/user/?' + query);
})
app.use('/csig/user-contact*', (req, res) => {
    var i = req.url.indexOf('?');
    var query = req.url.substr(i + 1);
    res.redirect('/tracking/user-contact/?' + query);
})
//csig refree pages
app.use('/csig/referee', require('./routes/csig/referee'));
app.use('/csig/start', require('./routes/csig/start'));
// Temporary csig route to make sure old URL doesn't break
app.use('/csig/referee-5', require('./routes/csig/start'));

//Tracking
app.use('/tracking', require('./routes/tracking'));
app.use('/tracking/user', require('./routes/tracking/user'));
//app.use('/tracking/user-contact', require('./routes/tracking/user-contact'));

//DPS Tracking
app.use('/tracking-dps', require('./routes/tracking/tracking-dps'));
//Change Of Name Tracking
app.use('/tracking-con', require('./routes/tracking/tracking-con'));
//How to
app.use('/how-to', require('./routes/how-to'));

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
app.get('/priority-service/confirmation', (req, res) => {
    res.render('priority-service/renew/confirmation');
})

// Temporary route to overseas next steps page
app.get('/overseas/confirmation', (req, res) => {
    res.render('priority-service/renew/confirmation');
})

//Gov.uk pages
app.use('/govuk', require('./routes/govuk'));
app.use('/govuk/damaged', require('./routes/govuk/damaged'));