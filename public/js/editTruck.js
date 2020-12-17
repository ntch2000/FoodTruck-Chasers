$(document).ready(function () {
  console.log("this is a test");

  $("#editTruck").on("submit", function (event) {
    event.preventDefault();
    const truck_name = $("#truckName").val();
    const operator_username = $("#operator_username").val();
    const phone = $("#phoneNumber").val();
    const city = $("#city").val();
    const category = $("#category").val();
    const promo_message = $("#promo").val();
    const id = $("#truckId").val();
    console.log("TruckName:", id);
    $.ajax({
      method: "PUT",
      url: `/api/editTruck/${id}`,
      data: {
        truck_name,
        operator_username,
        phone,
        city,
        category,
        promo_message,
      },
    }).then(response => {
        window.location.replace(`/operator/${operator_username}`);
    })
  });
});
