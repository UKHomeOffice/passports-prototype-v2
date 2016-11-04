var helpers = require('hmpo-frontend-toolkit').helpers,
    _ = require('underscore');

var $ = require('jquery'),
    typeahead = require('typeahead-aria').loadjQueryPlugin(),
    Bloodhound = require('typeahead-aria').Bloodhound;

var NAME = 'TYPEAHEAD';

var autocompletes = [];

var autocomplete = {

    formSubmitHandler: function formSubmitHandler() {
        _.each(autocompletes, function (autocomplete) {
            var match = _.find(autocomplete.options, function (o) {
                var val = autocomplete.input.val().toLowerCase();
                if (o.label.toLowerCase() === val || o.value.toLowerCase() === val) {
                    return o;
                }
            });
            if (match) {
                autocomplete.select.value = match.value;
                autocomplete.select.name = autocomplete.input.attr('name');
                autocomplete.input.attr('name', '');
            }
            // this also handles submitting a form, with a typed matching,
            // but not selected entry
        });
    },

    setValidationStyling: function setValidationStyling($input) {
        var $parent = $input.parent();

        while (!$parent.hasClass('form-group')) {
            $parent = $parent.parent();
        }

        if ($parent.hasClass('error')) {
            $input.addClass('invalid-input');
        }
    },

    setPreviousValue: function setValue(select, $input, options) {
        if (select.value) {
            var option = _.find(options, function (o) {
                if (o.value === select.value) {
                    return o;
                }
            });
            $input.typeahead('val', option.label);
        } else {
            // get previous error value from group
            var $parent = $input.parent();
            while (!$parent.hasClass('form-group')) {
                $parent = $parent.parent();
            }
            if ($parent.attr('data-previous-value')) {
                $input.typeahead('val', $parent.attr('data-previous-value'));
            }
        }
    },

    setupTypeahead: function setupTypeahead(select, inputID) {
        var options = _.filter(_.map(select.options, function (o) {
            return {
                label: o.innerHTML.trim(),
                value: o.value,
                synonyms: o.dataset.synonyms && o.dataset.synonyms.split(',')
            };
        }), function (o) {
            return o.value && o.value.trim();
        });

        var search = new Bloodhound({
            local: options,
            datumTokenizer: function(datum) {
                var vals = Bloodhound.tokenizers.whitespace(datum.label).concat(Bloodhound.tokenizers.whitespace(datum.value));
                if (datum.synonyms) {
                    _.each(datum.synonyms, function (s) {
                        vals = vals.concat(Bloodhound.tokenizers.whitespace(s));
                    });
                }
                return vals;
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        // setup typeahead & bloodhound
        var $input = $('#' + inputID);
        $input.typeahead({
            hint: false,
            minLength: 2
        },
        {
            display: 'label',
            source: search,
            templates: {
                empty: '<div class="tt-suggestion">No matching country</div>'
            }
        });

        // override default menu styling
        $('.tt-menu').css('position', 'relative');

        $('form').on('submit', autocomplete.formSubmitHandler);

        autocomplete.setValidationStyling($input);
        autocomplete.setPreviousValue(select, $input, options);

        autocompletes.push({
            select: select,
            input: $input,
            options: options
        });
    },

    setupField: function setupField(select) {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = select.id;
        input.name = select.name;
        input.className = 'form-control';
        input.setAttribute('aria-required', select.getAttribute('aria-required'));

        select.id = '';
        select.name = '';
        select.style = 'display: none;';

        select.parentNode.appendChild(input);

        autocomplete.setupTypeahead(select, input.id);
    },

    init: function init() {
        var typeaheads = document.getElementsByClassName(NAME.toLowerCase());
        if (typeaheads) {
            _.each(typeaheads, function (select) {
                helpers.once(select, NAME, function () {
                    autocomplete.setupField(select);
                });
            });
        }
    }

};

module.exports = autocomplete;
