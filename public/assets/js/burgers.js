$(function () {
    //Click event to eat a burger.
    $(".devoure-burger").on("click", function (event) {
      console.log("click working");
     var id = $(this).data("id");
        console.log("id");
      // Send the DELETE request using ajax.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
      }).then(function () {
        console.log("devoured burger", id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("submit button hit");
  
      //Grab burger name from form field.
     let newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0,
      };
  
      // Send the POST request using ajax.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        // Reload page
        location.reload();
      });
    });
  });