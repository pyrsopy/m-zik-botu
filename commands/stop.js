const discord = require("discord.js");

module.exports = {
  name: "dur",
  description: "Stop the music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Durdurabileceğim bir müzik yok.");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send("**Müzik durduruldu.**");
  }
};
