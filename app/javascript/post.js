import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
  $('.post_images').slick({
    arrows: false,
    dots: true
  });
})