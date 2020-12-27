const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Duyuru Metnini Giriniz.');
  message.delete();
  message.channel.send(mesaj);
};
// KwejN

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d'],
  permLevel: 0
};
// KwejN
exports.help = {
  name: 'duyuru',
  description: '',
  usage: ''
};
// KwejN
// KwejN
// KwejN
// KwejN
// KwejN