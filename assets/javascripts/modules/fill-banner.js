(function () {
    var values = {
        "pex-number": "1234567890",
        "passport-number": "502135326",
        "expiry-day": "27",
        "expiry-month": "12",
        "expiry-year": "07",
        "issue-day": "27",
        "issue-month": "12",
        "issue-year": "07",
        "phoneno": "0208 123 4567",
        "name": "Jonathan",
        "lastname": "Parker",
        "age-day": "12",
        "age-month": "07",
        "age-year": "1979",
        "national-insurance": "JL123456C",
        "profession": "Thundercat",
        "employer": "HMPO",
        "employeraddress": "10 Liono Street",
        "address-postcode": "SE1 1QW",
        "town-city": "Londinium",
        "phone-number": "02081234567",
        "reference": "1234567890",
        "email-address": "c.moore@test-corp.co.uk",
        "csig-name": "Adrian",
        "csig-email": "c.moore@test-corp.co.uk",
        "town-of-birth": "The promised land",
        "town": "Londinium",

        "naturalisation-registration-certificate-number": "808294932",
        "naturalisation-registration-certificate-issue-day": "28",
        "naturalisation-registration-certificate-issue-month": "04",
        "naturalisation-registration-certificate-issue-year": "2018",
        
        "address1": "10 Liono Street",
        "postcode": "SE1 1QW",
        "email": "c.moore@test-corp.co.uk",
        "mobile": "07999123456",
        "what-damaged": "The chip",
        "how-damaged": "My dastardly dog, woof woof woof woof woof woof woof. The canine horror ate my passport.",
        "expiry-day-damaged": "12",
        "expiry-month-damaged": "07",
        "expiry-year-damaged": "17",
        "third-party-first-name": "Sarah",
        "third-party-last-name": "Singleton",


        //   Parents
        "parent1-first-names": "Victoria",
        "parent1-last-name": "Winkletrousen",
        "parent2-first-names": "Daniel",
        "parent2-last-name": "Winkletrousen",
        "marriage-day": "06",
        "marriage-month": "02",
        "marriage-year": "1978",


        //   Mother
        "parent1-town": "Bournemouth",
        "parent1-country-of-birth": "United Kingdom",
        "parent1-country-of-nationality": "United Kingdom",
        "parent1-age-day": "17",
        "parent1-age-month": "03",
        "parent1-age-year": "1965",
        "parent1-passport-number": "502135326",
        "parent1-passport-issue-day": "12",
        "parent1-passport-issue-month": "04",
        "parent1-passport-issue-year": "2007",


        //   Father
        "parent2-town": "Norwich",
        "parent2-country-of-birth": "United Kingdom",
        "parent2-country-of-nationality": "United Kingdom",
        "parent2-age-day": "27",
        "parent2-age-month": "08",
        "parent2-age-year": "1963",
        "parent2-passport-number": "305135221",
        "parent2-passport-issue-day": "19",
        "parent2-passport-issue-month": "01",
        "parent2-passport-issue-year": "2008",


        //   Maternal grandparents
        "parent1-parent1-first-names": "Victoria",
        "parent1-parent1-last-name": "Winkletrousen",
        "parent1-parent2-first-names": "Daniel",
        "parent1-parent2-last-name": "Winkletrousen",

        "parent1-parent1-town": "Bournemouth",
        "parent1-parent1-country-of-birth": "United Kingdom",
        "parent1-parent1-country-of-nationality": "United Kingdom",
        "parent1-parent1-age-day": "23",
        "parent1-parent1-age-month": "05",
        "parent1-parent1-age-year": "1920",

        "parent1-parent2-town": "Norwich",
        "parent1-parent2-country-of-birth": "United Kingdom",
        "parent1-parent2-country-of-nationality": "United Kingdom",
        "parent1-parent2-age-day": "21",
        "parent1-parent2-age-month": "03",
        "parent1-parent2-age-year": "1922",
        //   "parent1-parents-marriage-day": "22",
        //   "parent1-parents-marriage-month": "07",
        //   "parent1-parents-marriage-year": "1941",


        //   Paternal grandparents
        "parent2-parent1-first-names": "Victoria",
        "parent2-parent1-last-name": "Winkletrousen",
        "parent2-parent2-first-names": "Daniel",
        "parent2-parent2-last-name": "Winkletrousen",

        "parent2-parent1-town": "Bournemouth",
        "parent2-parent1-country-of-birth": "United Kingdom",
        "parent2-parent1-age-day": "17",
        "parent2-parent1-age-month": "11",
        "parent2-parent1-age-year": "1921",

        "parent2-parent2-town": "Norwich",
        "parent2-parent2-country-of-birth": "United Kingdom",
        "parent2-parent2-age-day": "27",
        "parent2-parent2-age-month": "08",
        "parent2-parent2-age-year": "1922",
        //   "parent2-parents-marriage-day": "22",
        //   "parent2-parents-marriage-month": "07",
        //   "parent2-parents-marriage-year": "1941",
    };

    $("#populate").on("click", function () {
        Object.keys(values).forEach(function (key) {
            $("#" + key).val(values[key]);
        });

        //filter questions
        $('#application-for-false').click();
        $('#apply-uk-true').click();
        $('#passport-before-true').click();
        $('#lost-stolen-false').click();
        $('#name-changed-false').click();
        $('#uncancelled-No').click();
        $('#relationship-applicant-Mother').click();
        $('#passport-damaged-No').click();
        $('#choose-photo-upload').click();
        $('#plain-expression-Yes').click();
        $('#shadows-face-Yes').click();
        $('#yes').click();
        $('#title-Mr').click();
        $('#previous-name-false').click();
        $('#gender-M').click();
        $('#born-in-uk-true').click();
        $('#passport-options-34').click();
        $('#can-sign-true').click();
        $('#secure-return-false').click();
        $('#submit-photo-Yes').click();
        $('#parental-responsibility-true').click();

        // FTAs
        $('#naturalisation-registration-certificate-false').click();

        //change name
        $('#change-name-false').click();
        $('#change-of-name-reason-Marriage-or-civil-partnership').click();
        $('#16-or-older-false').click();

        $('#parents-married-Yes').click();

        //csig
        $('#applicant-check-home-address-Yes').click();
        $('#applicant-check-names-Yes').click();

        $(':checkbox').click();
        $('#applicant-check-Yes').click();
        $('#applicant-check-friend-Yes').click();
        $('#applicant-check-address-No').click();
        $('#retired-check-No').click();
        $('#knowntime').val('2');
        $('.button')[0].click();

    });

})();