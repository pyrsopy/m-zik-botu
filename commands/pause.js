module.exports = {
  name: "duraklat",
  description: "Müziği Duraklatır",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send(":star: **Ses Kanalında Değilsin !** :star:");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(":star: **Durdurabileceğim Herhangi Çalan Bir Müzik Bulunmamakta!** :star:");
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("✅ | Çalmakta Olan Müzik Duraklatıldı. :star:")
  }  
  }
}
