// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {

    $(".pastryItem").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr("data-id");    //return value of button id to DEVOUR!!!
        console.log(id);
        // var newDevour = $(this).data("newdevour");   // 
        //   var newDevourState = { devour: newDevour };    //

        // Send the PUT request. UPDATE
        $.ajax("/api/pastry/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevourState);

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //
    $(".create-form").on("submit", function (event) { //NEW PASTRY
        event.preventDefault();

        var newPastry = {
            pastry_name: $("#pastry_add").val().trim(), //GET INPUT VALUE
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/pastry", {
            type: "POST", //ADD
            data: newPastry,
        }).then(
            function () {
                console.log(" pastry$.js , created new pastry!!!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



    // $(".delete-pastry").on("click", function(event) {
    //   var id = $(this).data("id");
    //   $.ajax("/api/pastry/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted pastry", id);
    //       location.reload();
    //     }
    //   );
    // });
});
