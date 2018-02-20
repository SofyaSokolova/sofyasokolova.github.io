// main menu toggle

$(function() {
  $(".header__menu-logo").click(function() {
    $(".header__menu-block").fadeToggle(500);
    $(".shadow").fadeToggle(500);
  });
});

$(function() {
  $(".shadow").click(function() {
    $(".header__menu-block").fadeToggle(500);
    $(".shadow").fadeToggle(500);
  });
});