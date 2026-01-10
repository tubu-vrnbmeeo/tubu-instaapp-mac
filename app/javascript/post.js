import $ from 'jquery';
import 'slick-carousel';
import { getPostsLikes, setupHeartClick } from './modules/handleHeart';


document.addEventListener('DOMContentLoaded', () => {
  $('.post_images').slick({
    arrows: false,
    dots: true
  });

  getPostsLikes();
  setupHeartClick();
})