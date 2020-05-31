const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("<a:unlem:710206920274870333>  Hata : Sesli Kanala Girmen Lazım Dostum : /");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("<a:unlem:710206920274870333> | Hata : Şarkı Yokki Durdurayım : /");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send("<a:unlem:710206920274870333>  Onay : Tamam Şarkıyı Dediğin Gibi Durdurdum !");
  }
};
