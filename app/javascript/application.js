// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import $ from "jquery";

// jQuery をグローバルに公開
window.jQuery = $;
window.$ = $;

import "@hotwired/turbo-rails";
import "controllers";


