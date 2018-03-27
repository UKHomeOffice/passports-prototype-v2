var helpers = require('hmpo-frontend-toolkit').helpers;

require('van11y-accessible-tab-panel-aria');

var formFocus = require('hmpo-frontend-toolkit').formFocus,
    reveal = require('hmpo-frontend-toolkit').progressiveReveal,
    validation = require('hmpo-frontend-toolkit').validation,
    anchorButton = require('hmpo-frontend-toolkit').anchorButton,
    closeWindow = require('hmpo-frontend-toolkit').close,
    typeahead = require('./modules/typeahead'),
    duplicateItem = require('./modules/duplicate-item'),
    fillBanner = require('./modules/fill-banner'),
    accordion = require('./modules/accordion');

helpers.documentReady(duplicateItem);
helpers.documentReady(fillBanner);
helpers.documentReady(accordion);
helpers.documentReady(formFocus);
helpers.documentReady(reveal);
helpers.documentReady(validation);
helpers.documentReady(anchorButton);
helpers.documentReady(closeWindow);
helpers.documentReady(typeahead.init);
