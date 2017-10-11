(function() {
  var values = {
      "pex-number": "1234567890",
      "passport-number": "502135326",
      "expiry-day": "27",
      "expiry-month": "12",
      "expiry-year": "2019",
      "phoneno": "0208 123 4567",
      "name": "Adrian",
      "lastname": "Brereton",
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
      "email-address": "test@thundercats.com",
      "csig-name": "Adrian",
      "csig-email": "test@thundercats.com",
      "town-of-birth": "The promised land",
      "town": "Londinium",
      "address1": "10 Liono Street",
      "postcode": "SE1 1QW",
      "email": "test@thundercats.com",
      "mobile": "07999123456",
      "what-damaged": "The chip",
      "how-damaged": "My dastardly dog, woof woof woof woof woof woof woof. The canine horror ate my passport."
  };

  $("#populate").on("click", function(){
      Object.keys(values).forEach(function(key){
          $("#" + key).val(values[key]);
      });

      //damaged
      $('#apply-uk-true').click();
      $('#passport-before-true').click();
      $('#lost-stolen-false').click();
      $('#name-changed-false').click();
      $('#uncancelled-No').click();
      $('#passport-damaged-No').click();
      $('#choose-photo-upload').click();
      $('#plain-expression-Yes').click();
      $('#shadows-face-Yes').click();
      $('#yes').click();
      $('#title-Mr').click();
      $('#previous-name-false').click();
      $('#gender-M').click();
      $('#born-in-uk-true').click();
      $('#passport-options-32').click();
      $('#can-sign-true').click();
      $('#secure-return-false').click();


      $(':checkbox').click();
      $('#applicant-check-Yes').click();
      $('#applicant-check-friend-Yes').click();
      $('#applicant-check-address-No').click();
      $('#retired-check-Yes').click();
      $('#knowntime').val('2');
      $('.button')[0].click();


  });
})();
