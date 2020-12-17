$(document).ready(function (e) {
  console.log("test operator");
  // const operator_username = $("#operator_username").val();

  // console.log(operator_username);

  // save username to local storage to be used when a new truck is created

  $(document).ready(function () {
    $(".delete-truck").on("click", function () {
      const id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: `/api/operator/${id}`,
      }).then((response) => {
        window.location.reload();
      });
    });
  });
});
