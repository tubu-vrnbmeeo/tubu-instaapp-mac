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
    debugger
    $('.avatar').append(
      `<img src=${url} class="avatar_image">`
    )
  })
})
