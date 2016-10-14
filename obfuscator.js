$('.tweet').each(function () {
  const $tweet = $(this)
  const userId = $tweet.find('.account-group').data('user-id') + ''

  const $fullName = $tweet.find('.fullname')
  const $userName = $tweet.find('.username')
  const $avatar = $tweet.find('.avatar')

  let avatarString = new window.Identicon(userId).toString()
  $avatar.attr('src', 'data:image/png;base64,' + avatarString)
  $fullName.text(userId)
  $userName.text('')
})
