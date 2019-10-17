$(document).ready(function () {
  $('.show-menu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
});