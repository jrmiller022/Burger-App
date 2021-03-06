$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            burger: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger");
                location.reload();
            }
        );
    });

    $(".delete-devoured").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",

        }).then(function () {
            console.log("Deleted burger", id);
            location.reload();
        });
    });
});