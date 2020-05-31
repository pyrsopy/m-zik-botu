const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField(' <a:ayar:710206813920034906> Friside Komutlar',`
 <a:rok2:710205094225772596> <a:ayar:710206813920034906>|  ** -moderasyon** : Moderasyon Komutlarını Açar. <a:galp:710206737969315871> 

 <a:rok2:710205094225772596> <a:ayar:710206813920034906> |  **-kullanıcı** : Kullanıcı Komutları Açar.   <a:galp:710206737969315871>

 <a:rok2:710205094225772596> <a:ayar:710206813920034906> |  **-yeni-komutlar** : Yeni Komutları Açar.   <a:galp:710206737969315871>

 <a:rok2:710205094225772596> <a:ayar:710206813920034906> |  **-muzik** : Muzik Komutlarina Bakabilirsiniz.  <a:galp:710206737969315871>  `)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};  