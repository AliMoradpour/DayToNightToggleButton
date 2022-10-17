$(document).ready(function () {
  $(".toggle-btn").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("dark");
  });
});
