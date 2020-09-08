module.exports = {
  name: "geç",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send(":star: **Ses Kanalında Değilsin !** :star:");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(":star: **Geçebileceğim Herhangi Bir Müzik Bulunmuyor!** :star:");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ | Müzik Başarıyla Geçildi!");
  }
};
