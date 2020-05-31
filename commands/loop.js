module.exports = {
  name: "döngü",
  description: "Sıradaki Döngü",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("<a:unlem:710206920274870333>  Hata : Sesli Kanala Girmen Lazım Dostum :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("There is nothing playing that i could loop");
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`<a:parti:710206859146952756>  Döngü  **${serverQueue.loop ? "Açtım Kapatmak İstiyorsan | Kapat" : " Kapattım Açmak İstiyorsan | Aç"}**`)
    
    
    
    
  }
}
