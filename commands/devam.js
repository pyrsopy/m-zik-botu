module.exports = {
  name: "devam", 
  description: "Duraklatılan Müzik Devam Eder",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send(":star: **Ses Kanalında Değilsin !** :star:");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  
  return message.channel.send("✅ | Duraklatılan Müzik Başarıyla Devam Ediyor ! :star:") 
 }
    
    message.channel.send(":star: **Çalmaya Devam Edebileceğim Duraklatılmış Bir Müzik Bulunmamakta !** :star:")
    
  }
}
