function obfuscate ($tweets) {
  $tweets.each(function () {
    const $tweet = window.$(this)
    const userId = $tweet.find('.account-group').data('user-id') + ''

    const $fullName = $tweet.find('.fullname')
    const $userName = $tweet.find('.username')
    const $avatar = $tweet.find('.avatar')
    const $retweetText = $tweet.find('.js-retweet-text a')

    let avatarString = new window.Identicon(userId).toString()
    $avatar.attr('src', 'data:image/png;base64,' + avatarString)
    $retweetText.find('b').text($retweetText.data('user-id') + ' Retweeted')
    $fullName.text(userId)
    $userName.text('')
  })
}

obfuscate(window.$('.tweet'))

const observer = new window.MutationObserver(mutations => {
  mutations.forEach(mutation => {
    obfuscate(window.$(mutation.addedNodes).find('.tweet'))
  })
})

observer.observe(document.getElementById('stream-items-id'), { childList: true })
