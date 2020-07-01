$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    prevArrow: '<img class="left" src="assets/images/left-arrow.svg" alt="">',
    nextArrow: '<img class="right" src="assets/images/right-arrow.svg" alt="">',
  });
});