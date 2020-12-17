$(document).ready(function (e) {
  console.log("test operator");
  const operator_username = $("#operator_username").val();

  console.log(operator_username);

  // save username to local storage to be used when a new truck is created
  localStorage.setItem("username", operator_username);
});
