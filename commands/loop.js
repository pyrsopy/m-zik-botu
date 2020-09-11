module.exports = {
  name: "loop",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("There is nothing playing that i could loop");
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Loop is now **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    
    
    
    
  }
}
