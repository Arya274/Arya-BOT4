let handler = function (m) {
  // this.sendContact(m.chat, '62895605030379', 'STM37', m)
  this.sendContact(m.chat, '62895605030379', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
