
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(' ```Komut Menüsü```  ')
  message.channel.send(' ``mo!oynat= Şarkı Çalıştır``   ``mo!geç= şarkıyı geç``  ``mo!duraklat= şarkıyı durdur``   ``mo!döngü= şarkıyı tekrar ettirir`` ')    
}
}
