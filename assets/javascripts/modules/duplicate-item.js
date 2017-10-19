$(document).ready(function() {
    var max_fields      = 3; //maximum input boxes allowed
    var wrapper         = $(".duplicate-row"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var template        = $(".duplicate-row-template"); //Add button ID

    var x = 1;
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append(template.html()); //add input box
        }
    });

    $(wrapper).on("click",".remove-field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parents()[1].remove(); x--;
    })
});
