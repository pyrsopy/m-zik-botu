
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(' ```Komut Menüsü```  ')
  message.channel.send('m!oynat: Şarkı Çalıştır  \n m!geç: şarkıyı geç')    
}
}
