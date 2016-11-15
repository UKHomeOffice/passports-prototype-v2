var helpers = require('hmpo-frontend-toolkit').helpers;

require('van11y-accessible-tab-panel-aria');

var formFocus = require('hmpo-frontend-toolkit').formFocus,
    reveal = require('hmpo-frontend-toolkit').progressiveReveal,
    validation = require('hmpo-frontend-toolkit').validation,
    anchorButton = require('hmpo-frontend-toolkit').anchorButton,
    closeWindow = require('hmpo-frontend-toolkit').close,
    typeahead = require('./modules/typeahead');

helpers.documentReady(formFocus);
helpers.documentReady(reveal);
helpers.documentReady(validation);
helpers.documentReady(anchorButton);
helpers.documentReady(closeWindow);
helpers.documentReady(typeahead.init);
