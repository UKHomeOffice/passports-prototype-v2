$(document).ready(function() {
  var maxFields = 3;
  var wrapper = $(".duplicate-row");
  var addButton = $(".add-row");
  var template = $(".duplicate-row-template");
  var x = 1;

  $(addButton).click(function(e) {
    e.preventDefault();
    if (x < maxFields) {
      x++;
      $(wrapper).append(template.html());
    }
  });

  $(wrapper).on("click", ".remove-field", function(e) {
    e.preventDefault();
    $(this).parents()[1].remove();
    x--;
  })
});
