import $ from 'jquery';
import 'slick-carousel';
import { FetchRequest } from '@rails/request.js';

document.addEventListener('DOMContentLoaded', () => {
  $('.post_images').slick({
    arrows: false,
    dots: true
  });

  getPostsLikes();
})

const getPostsLikes = async () => {
  const request = new FetchRequest(
    'get',
    '/api/postslikes'
  );
  try {
    const response = await request.perform();
    const data = await response.text;
    const postsLikes = JSON.parse(data);
    $.each(postsLikes, (k, v) => {
      if(v) {
        $(`.active_heart_post_${k}`).removeClass('hidden')
      } else {
        $(`.inactive_heart_post_${k}`).removeClass('hidden')
      }
    })
  } catch (error) {
    window.alert('error');
  }
}