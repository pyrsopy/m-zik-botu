
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(' ```Komut Menüsü```  ')
  message.channel.send('!oynat \n Şarkı Çalıştırır \n !yardım \n Bu Komudu Çalıştır.')    
}
}
