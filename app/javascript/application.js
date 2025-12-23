// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import { FetchRequest } from '@rails/request.js';

import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;
// import { csrfToken } from 'rails-ujs'
// import axios from 'axios'

// axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener("DOMContentLoaded", () => {
  $.get(`/profile/avatar`)
    .done(function(response) {
      const url = response.url;
      if(url != 'not found') {
          $('.avatar').append(
            `<img src=${url} class="avatar_image avatar_image_uploaded">`
          );
      } else {
          $('.avatar_image').removeClass('hidden');
      }
    })
    .fail(function(error) {
      window.alert('error');
    });

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
      $('.avatar_image_uploaded').attr('src', url);
    } catch (error) {
      window.alert('avatar not uploaded');
    }
  });
});
