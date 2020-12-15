$(document).ready(function (e) {
  console.log("Operator login page");

  $("#select-user").on("click", function (e) {
    e.preventDefault();
    const operator_username = $("#username :selected").text();
    console.log(operator_username);

    $.ajax({
      method: "GET",
      url: `/operator/${operator_username}`,
      data: {
        operator_username,
      },
    }).then((response) => {
      //console.log(response);
      window.location.replace(`/operator/${operator_username}`);
    });
  });
});
