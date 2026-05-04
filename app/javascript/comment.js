import $ from 'jquery';
import { FetchRequest } from '@rails/request.js';

const appendNewComment = (content, accountName, avatarUrl) => {
  $('.comments_container').append(
    `<div class="comment">
      <div class="comment_avatar">
        <img src=${avatarUrl}>
      </div>
      <div class="comment_right_column">
        <div class="comment_owner">
          ${accountName}
        </div>
        <div class="comment_content">
          ${encodeURI(content)}
        </div>
      </div>
    </div>`
  )
}

$(function() {
  const $textarea = $('#textarea')
  const lineHeight = parseInt($textarea.css('lineHeight'))
  const dataset = $('#post_comments_show').data()
  const postId = dataset.postId
  $textarea.on('input', function(e) {
    const lines = ($(this).val() + '\n').match(/\n/g).length
    $(this).height(lineHeight * lines)
  })

  $('form').on('submit', async (e) => {
    e.preventDefault()
    const content = $('#textarea').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      const request = new FetchRequest('post', 'comments', {
        body: { comment: { content: content } },
        responseKind: 'json'
      })
      const response = await request.perform()
      if (response.ok) {
        const data = await response.json
        appendNewComment(data.content, data.accountName, data.avatarUrl)
        $('#textarea').val('')
      } else {
        window.alert('失敗')
      }
    }
  })
})