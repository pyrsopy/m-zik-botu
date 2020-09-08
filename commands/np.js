module.exports = {
  name: "np",
  description: "O Anda Çalan Şarkının Adını Gönderir.",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send(":star: **Ses Kanalında Değilsin !** :star:");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Bot is not playing anything");
    }
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}
