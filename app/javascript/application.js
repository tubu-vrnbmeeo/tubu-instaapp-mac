// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import jQuery from "jquery"
window.$ = jQuery
window.jQuery = jQuery
// import { csrfToken } from 'rails-ujs'
// import axios from 'axios'

// axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener("DOMContentLoaded", () => {
  $.get(`/profile/avatar`, function(response) {
    const url = response.url
    if(url != 'not found') {
        $('.avatar').append(
          `<img src=${url} class="avatar_image">`
        )
    } else {
        $('.avatar_image').removeClass('hidden')
    }
  })
  .catch((error) => {
      window.alert('error')
    })

  $(document).on('click', '.avatar_image', () => {
    $('#profile_picture_input').trigger('click')
  })

  $('#profile_picture_input').on('change', (e) => {
    // const formData = new FormData()
    // formData.append('avatar', e.target.files[0])
    // console.log(formData)
    // axios.post(`/profile`, formData)
    //   .then((response) => {
    //     const url = response.data.url
    //     $('.avatar_image').src = url
    //   })
    //   .catch((error) => {
    //     window.alert('avatar not updated')
    //   })
    $('#image_upload_form').trigger('submit')

  })
})
