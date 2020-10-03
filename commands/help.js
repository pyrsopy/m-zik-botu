
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(' ```Komut Menüsü```  ')
  message.channel.send(' ``m!oynat= Şarkı Çalıştır``   ``m!geç= şarkıyı geç``  ``m!duraklat= şarkıyı durdur``   ``m!döngü= şarkıyı tekrar ettirir`` ')    
}
}
