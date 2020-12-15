$(document).ready(function () {
  console.log("This is a test");

  $("#new-truck").on("submit", function (e) {
    e.preventDefault();
    const truck_name = $("#truck_name").val();
    const operator_username = $("#username").val();
    const phone = $("#phone").val();
    const city = $("#city").val();
    const category = $("#category").val();
    const promo_message = $("#promo_message").val();

    console.log(truck_name);
    console.log(phone);
    console.log(city);
    console.log(category);
    console.log(promo_message);

    $.ajax({
      method: "POST",
      url: "/api/createTruck",
      data: {
        truck_name,
        operator_username,
        phone,
        city,
        category,
        promo_message,
      },
    }).then((response) => {
      window.location.replace("/operator");
    });
  });
});
