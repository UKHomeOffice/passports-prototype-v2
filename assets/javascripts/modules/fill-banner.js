(function () {
    // Load any previously saved journey setting
    loadSettings()

    var values

    if (localStorage.journey === 'FTA' || localStorage.journey === 'FTA - Third Party') {
        values = require('./applications/fta').values
    } else if (localStorage.journey === 'Adult Renew' || localStorage.journey === 'Adult Renew - Third Party') {
        values = require('./applications/adult-renew').values
    } else if (localStorage.journey === '12-15 Renew' || localStorage.journey === '12-15 Renew - Third Party') {
        values = require('./applications/12-15').values
    } else if (localStorage.journey === '0-11 Renew' || localStorage.journey === '0-11 Renew - Third Party') {
        values = require('./applications/0-11').values
    } else if (localStorage.journey === 'FTC' || localStorage.journey === 'FTC - Third Party') {
        values = require('./applications/ftc').values
    } else {
        values = require('./applications/fta').values
    }

    $("#populate").on("click", function () {
        Object.keys(values).forEach(function (key) {
            $("#" + key).val(values[key]);
        });

        if (localStorage.journey === 'FTA' || localStorage.journey === 'FTA - Third Party') {
            var fta = require('./applications/fta')
            fta.clicks()
        } else if (localStorage.journey === 'Adult Renew' || localStorage.journey === 'Adult Renew - Third Party') {
            var adultRenew = require('./applications/adult-renew')
            adultRenew.clicks()
        } else if (localStorage.journey === '12-15 Renew' || localStorage.journey === '12-15 Renew - Third Party') {
            var renew12to15 = require('./applications/12-15')
            renew12to15.clicks()
        } else if (localStorage.journey === '0-11 Renew' || localStorage.journey === '0-11 Renew - Third Party') {
            var renew0to11 = require('./applications/0-11')
            renew0to11.clicks()
        } else if (localStorage.journey === 'FTC' || localStorage.journey === 'FTC - Third Party') {
            var ftc = require('./applications/ftc')
            ftc.clicks()
        } else {
            var fta = require('./applications/fta')
            fta.clicks()
        }

    });

    // disable the application

    var fileName = location.href.split("/").slice(-1);

    if (fileName.includes("") || fileName.includes("startpage")) {
        $("#journey-select").prop("disabled", false)
    } else {
        $("#journey-select").prop("disabled", true)
    }

})();

$("#journey-select").change(function () {
    saveSettings()
});

function loadSettings() {
    $('#journey-select').val(localStorage.journey);
}

function saveSettings() {
    localStorage.journey = $('#journey-select').val();
}