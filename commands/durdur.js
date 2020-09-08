const discord = require("discord.js");

module.exports = {
  name: "durdur",
  description: "Müziği Durdurur",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send(":star: **Ses Kanalında Değilsin !** :star:");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(":star: **Durdurabileceğim Herhangi Bir Çalan Müzik Yok!** :star:");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send(":star: **Müzik Durduruldu !** :star:");
  }
};
