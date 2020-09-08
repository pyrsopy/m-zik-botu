module.exports = {
  name: "tekrarla",
  description: "Şarkıyı Döngüye Sokarsınız.",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send(":star: **Ses Kanalında Değilsin !** :star:");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(":star: **Döngüye Sokabileceğim Bir Müzik Bulunmamakta !** :star:");
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Loop is now **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    
    
    
    
  }
}
