module.exports = {
  name: "skip",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("<a:unlem:710206920274870333>  Hata : Sesli Kanala Girmen Lazım Dostum : /");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("<a:unlem:710206920274870333>  Hata : Sesli Kanala Girmen Lazım Dostum : /");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ | Skipping The Song");
  }
};
