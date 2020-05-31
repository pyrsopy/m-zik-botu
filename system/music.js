//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send(" <a:wuw:710205330625396868>  | Müzik Sırası Artık Sona Erdi Görüşürüz ! | <a:yuv:710834564771086397> ").catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("<a:pinn:710206773704785992>  | Bu Video Telif Hakkı İçerir ! |  <a:plah:710206256195043419> ")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    
    
    
      queue.textChannel.send(`<a:pinn:710206773704785992>  | Başlayan Müzik  |  <a:plah:710206256195043419> [${song.title}](${song.url})  Rythm Gold`)
    
    
  }
}
