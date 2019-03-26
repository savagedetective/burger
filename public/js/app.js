$(document).ready(function() {

    //verifies DOM is loaded
    console.log("Goliath Online.");

    //logic to add burger
    $("#add-burger-button").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-form-input").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
            .then(function(){
                console.log("Burger Created.")
                location.reload();
            });

    });

});