const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number kosong\nHarap masukkan *Serial Number* dengan benar!'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah\n*Harap masukkan Serial Number dengan benar!'
  user.registered = false
  m.reply(`Unreg berhasil, kamu bisa login lagi dengan ketik *#daftar* !`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

