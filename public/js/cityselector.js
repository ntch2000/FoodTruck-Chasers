$(document).ready(function () {
  console.log("selecting a city");
  $("#submit").on("click", function (event) {
    event.preventDefault(), console.log("you have selected a city");
    // console.log($(this).parent().find("#input").val());
    const city = $(this).parent().find("#input").val();
    console.log(city);

    $.ajax({
        method: "GET",
        url: `/truckCityList/${city}`,
        data: {
            city,
        }
    }).then((response)=>{
        console.log("ajax call ran");
        window.location.replace(`/truckCityList/${city}`)
    });
  });
});
