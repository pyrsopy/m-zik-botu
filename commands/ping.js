
module.exports = {
  name: "yardım",
  description: "Pinging the bot",
  execute(client, message) {
  .channel.send('<a:wuw:710205330625396868> | ``Rythm Gold Komut Menüsü``  ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -play = Müziği Başlatmanızı Sağlar /n dhhd')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -döngü = Müziği Tekrarlar ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -lyrics = Müziğin Sözlerini İnternetten Arar ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -şarkı-adı = Müziği Başlatmanızı Sağlar ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -durdur = Müziği Durdurmamızı Sağlar ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -sıra = Müzik Sırasını Göstermeyi Sağlar ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -devam = Müziği Durdurduktan Sonra Başlatmayı Sağlar ')
  message.channel.send('<a:rok2:710205094225772596>  | <a:wuw:710205330625396868>  | -atla = Müziği Atlar ')
      if (args[0] == 'yap') {
  const embedd = new discord.RichEmbed()
  .setAuthor('Duyuru')
  .setColor('RANDOM')
  .setDescription(yazı)
  .setTimestamp()
  .setFooter(`${client.user.tag} | ${prefix}yardım`)
  message.channel.send(embedd);
  message.delete();
}
