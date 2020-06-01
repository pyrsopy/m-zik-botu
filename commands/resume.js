module.exports = {
  name: "devam", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("<a:unlem:710206920274870333>  Hata : Sesli Kanala Girmen Lazım Dostum :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  
  return message.channel.send("<a:unlem:710206920274870333>  Onay : Şarkıyı Devam Ettiriyom :/") 
 }
    
    message.channel.send("<a:unlem:710206920274870333>  Hata : Şarkıyı Durdurmamassın Önce Durdur :/")
    
  }
}
