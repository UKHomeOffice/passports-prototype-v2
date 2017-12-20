
// routes
app.use(require('./routes/start'));

// prototype_171127
app.use('/prototype_171127/overseas', require('./routes/prototype_171127/overseas'));
app.use('/prototype_171127/overseas-not-eligible', require('./routes/prototype_171127/overseas-not-eligible'));
app.use('/prototype_171127/overseas-first', require('./routes/prototype_171127/overseas-first'));
app.use('/prototype_171127/overseas-lost-change', require('./routes/prototype_171127/overseas-lost-change'));
app.use('/prototype_171127/uploadphoto', require('./routes/prototype_171127/uploadphoto'));
app.use('/prototype_171127/uploadphoto-oix', require('./routes/prototype_171127/uploadphoto-oix'));
app.use('/prototype_171127/filter-common', require('./routes/prototype_171127/filter-common'));
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

//Tracking
app.use('/tracking', require('./routes/tracking'));
