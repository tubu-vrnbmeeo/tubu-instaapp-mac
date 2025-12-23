import { FetchRequest } from '@rails/request.js';

import $ from "jquery";

export const displayAvatar = async () => {
  const request = new FetchRequest(
    'get',
    '/api/profile/avatar'
  );
  try {
    const response = await request.perform();
    const data = await response.text;
    const url = JSON.parse(data).url;
    if(url != 'not found') {
        $('.avatar').append(
          `<img src=${url} class="avatar_image avatar_image_uploaded">`
        );
    } else {
        $('.avatar_image').removeClass('hidden');
    }
  } catch (error) {
    window.alert('error');
  }
}

export const setupAvatarUpload = () => {
  $(document).on('click', '.avatar_image', () => {
    $('#profile_picture_input').trigger('click');
  });

  $('#profile_picture_input').on('change', async (e) => {
    const formData = new FormData();
    formData.append('profile[avatar]', e.target.files[0]);
    const request = new FetchRequest(
      'put',
      '/profile',
      { body: formData }
    );
    try {
      const response = await request.perform();
      const data = await response.text;
      const url = JSON.parse(data).url;
      $('.avatar_image').attr('src', url);
    } catch (error) {
      window.alert('avatar not uploaded');
    }
  });
}