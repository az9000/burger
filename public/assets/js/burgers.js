$(function() {
  // Create a new burger
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var burger = {
      burger_name: $("#burger")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/burgers/", {
      type: "POST",
      data: burger
    }).then(function(data) {
      console.log("created new burger", burger);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // devour a burger
  $(".btn-devour").on("click", function(event) {
    event.preventDefault();
    console.log('id:', this.id);
    $.ajax("/api/burgers/" + this.id, {
      type: "PUT",
      data: {
          devoured: true
      }
    }).then(function(data) {
      console.log("burger devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
