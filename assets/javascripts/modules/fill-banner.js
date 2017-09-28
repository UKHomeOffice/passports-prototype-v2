(function() {
  var values = {
      "pex-number": "1234567890",
      "passport-number": "4632764",
      "expiry-month": "12",
      "expiry-year": "21",
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
      "csig-email": "test@thundercats.com"
  };

  $("#populate").on("click", function(){
      Object.keys(values).forEach(function(key){
          $("#" + key).val(values[key]);
      });
      $(':checkbox').click();
      $('#applicant-check-Yes').click();
      $('#applicant-check-friend-Yes').click();
      $('#applicant-check-address-No').click();
      $('#retired-check-Yes').click();
      $('#knowntime').val('2');
      $('.button')[0].click();
  });
})();
