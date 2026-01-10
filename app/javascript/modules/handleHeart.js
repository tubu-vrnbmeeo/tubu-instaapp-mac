import $ from "jquery";
import { FetchRequest } from '@rails/request.js';

export const getPostsLikes = async () => {
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
        $(`.active_heart_post_${k}`).removeClass('hidden');
      } else {
        $(`.inactive_heart_post_${k}`).removeClass('hidden');
      }
    })
  } catch (error) {
    window.alert('like get error');
  }
}

export const setupHeartClick = () => {
  $(`.inactive_heart`).on('click', async (click) => {
    const postId = $(click.currentTarget).data('post-id');
    const request = new FetchRequest(
      'post',
      `/api/posts/${postId}/like`,
      { body: {} }
    );
    try {
      const response = await request.perform();
      const data = await response.text;
      const status = JSON.parse(data).status;
      if(status === 'ok') {
        $(`.active_heart_post_${postId}`).removeClass('hidden')
        $(`.inactive_heart_post_${postId}`).addClass('hidden')
      }
    } catch (error) {
      window.alert('like post error');
    }
  });

  $(`.active_heart`).on('click', async (click) => {
    const postId = $(click.currentTarget).data('post-id');
    const request = new FetchRequest(
      'delete',
      `/api/posts/${postId}/like`
    );
    try {
      const response = await request.perform();
      const data = await response.text;
      const status = JSON.parse(data).status;
      if(status === 'ok') {
        $(`.inactive_heart_post_${postId}`).removeClass('hidden')
        $(`.active_heart_post_${postId}`).addClass('hidden')
      }
    } catch (error) {
      window.alert('like delete error');
    }
  });
}