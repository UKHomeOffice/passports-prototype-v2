
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

// 12_15s_180119
app.use('/12_15s_180119/overseas', require('./routes/12_15s_180119/overseas'));
app.use('/12_15s_180119/overseas-not-eligible', require('./routes/12_15s_180119/overseas-not-eligible'));
app.use('/12_15s_180119/overseas-first', require('./routes/12_15s_180119/overseas-first'));
app.use('/12_15s_180119/overseas-lost-change', require('./routes/12_15s_180119/overseas-lost-change'));
app.use('/12_15s_180119/uploadphoto', require('./routes/12_15s_180119/uploadphoto'));
app.use('/12_15s_180119/uploadphoto-oix', require('./routes/12_15s_180119/uploadphoto-oix'));
app.use('/12_15s_180119/renew', require('./routes/12_15s_180119/renew'));
app.use('/12_15s_180119/intro', require('./routes/12_15s_180119/intro'));
app.use('/12_15s_180119/filter', require('./routes/12_15s_180119/filter'));
app.use('/12_15s_180119/startpage', require('./routes/12_15s_180119/startpage'));
app.use('/12_15s_180119/startpage-overseas', require('./routes/12_15s_180119/startpage-overseas'));
app.use('/12_15s_180119/photoguide-short', require('./routes/12_15s_180119/photoguide-short'));
app.use('/12_15s_180119/photoguide-static', require('./routes/12_15s_180119/photoguide-static'));
app.use('/12_15s_180119/photoguide-shop', require('./routes/12_15s_180119/photoguide-shop'));
app.use('/12_15s_180119/takephoto', require('./routes/12_15s_180119/takephoto'));
app.use('/12_15s_180119/upload', require('./routes/12_15s_180119/upload'));
app.use('/12_15s_180119/rejectedphoto', require('./routes/12_15s_180119/rejectedphoto'));
app.use('/12_15s_180119/filter-common-temp', require('./routes/12_15s_180119/filter-common-temp'));
app.use('/12_15s_180119/startpage-temp', require('./routes/12_15s_180119/startpage-temp'));
app.use('/12_15s_180119/overseas-not-available', require('./routes/12_15s_180119/overseas-not-available'));
app.use('/12_15s_180119/throttle', require('./routes/12_15s_180119/throttle'));
app.use('/12_15s_180119/payment', require('./routes/12_15s_180119/payment'));
app.use('/12_15s_180119/submission-failed', require('./routes/12_15s_180119/submission-failed'));
app.use('/12_15s_180119/sar', require('./routes/12_15s_180119/sar'));
app.use('/12_15s_180119/photo-url', require('./routes/12_15s_180119/photo-url'));
app.use('/12_15s_180119/photo-code', require('./routes/12_15s_180119/photo-code'));
app.use('/12_15s_180119/mismatch', require('./routes/12_15s_180119/mismatch'));
app.use('/12_15s_180119/redirect-tracking', require('./routes/12_15s_180119/redirect-tracking'));

//Tracking
app.use('/tracking', require('./routes/tracking'));
