
// routes
app.use(require('./routes/start'));

// prototype_171127
app.use('/prototype_171127/overseas', require('./routes/prototype_171127/overseas'));
app.use('/prototype_171127/overseas-not-eligible', require('./routes/prototype_171127/overseas-not-eligible'));
app.use('/prototype_171127/overseas-first', require('./routes/prototype_171127/overseas-first'));
app.use('/prototype_171127/overseas-lost-change', require('./routes/prototype_171127/overseas-lost-change'));
app.use('/prototype_171127/uploadphoto', require('./routes/prototype_171127/uploadphoto'));
app.use('/prototype_171127/uploadphoto-oix', require('./routes/prototype_171127/uploadphoto-oix'));
app.use('/prototype_171127/renew', require('./routes/prototype_171127/renew'));
app.use('/prototype_171127/intro', require('./routes/prototype_171127/intro'));
app.use('/prototype_171127/filter', require('./routes/prototype_171127/filter'));
app.use('/prototype_171127/startpage', require('./routes/prototype_171127/startpage'));
app.use('/prototype_171127/startpage-overseas', require('./routes/prototype_171127/startpage-overseas'));
app.use('/prototype_171127/photoguide-short', require('./routes/prototype_171127/photoguide-short'));
app.use('/prototype_171127/photoguide-static', require('./routes/prototype_171127/photoguide-static'));
app.use('/prototype_171127/photoguide-shop', require('./routes/prototype_171127/photoguide-shop'));
app.use('/prototype_171127/takephoto', require('./routes/prototype_171127/takephoto'));
app.use('/prototype_171127/upload', require('./routes/prototype_171127/upload'));
app.use('/prototype_171127/rejectedphoto', require('./routes/prototype_171127/rejectedphoto'));
app.use('/prototype_171127/filter-common-temp', require('./routes/prototype_171127/filter-common-temp'));
app.use('/prototype_171127/startpage-temp', require('./routes/prototype_171127/startpage-temp'));
app.use('/prototype_171127/overseas-not-available', require('./routes/prototype_171127/overseas-not-available'));
app.use('/prototype_171127/throttle', require('./routes/prototype_171127/throttle'));
app.use('/prototype_171127/payment', require('./routes/prototype_171127/payment'));
app.use('/prototype_171127/submission-failed', require('./routes/prototype_171127/submission-failed'));
app.use('/prototype_171127/sar', require('./routes/prototype_171127/sar'));
app.use('/prototype_171127/photo-url', require('./routes/prototype_171127/photo-url'));
app.use('/prototype_171127/photo-code', require('./routes/prototype_171127/photo-code'));
app.use('/prototype_171127/mismatch', require('./routes/prototype_171127/mismatch'));
app.use('/prototype_171127/redirect-tracking', require('./routes/prototype_171127/redirect-tracking'));

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

//Tracking
app.use('/tracking', require('./routes/tracking'));
