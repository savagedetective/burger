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
                console.log("Burger Created.");
                $("#burger-form-input").val("");
                location.reload();
            });

    });

    //logic to delete burger
    $(".delete-burger").on("click", function(event) {

        var id = $(this).attr("data-id");

        console.log("Delete burger button clicked - " + id);

        $.ajax("/api/burgers/" + id, {
            type:"DELETE"
        })
            .then(
                function() {
                    console.log("burger deleted", id);
                    location.reload();
                }
            );
    });

    //logic to change devour state

    $(".change-devoured").on("click", function(event) {

        var id = $(this).attr("data-id");
        var devState = $(this).attr("not-devoured");

        console.log("id is " + id + ", devState is " + devState);

        var newDevoured = {
            devoured: devState
        };

        $.ajax("/api/burgers/" + id, {
            type:"PUT",
            data: newDevoured
        })
            .then(function() {
                console.log("changed devoured to", newDevoured);
                location.reload();
            });
        
    });

});