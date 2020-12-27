const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');



var prefix = ayarlar.prefix;



exports.run = async (bot, message, args) => {

     if(!message.member.roles.cache.has("784762532383686659")) return message.reply("Bu Komutu Kullanmak İçin Onay Yetkilisi Rolün Olmak Zorunda!");

    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

    if (!rMember) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `onayla **@İsim**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL()).setTimestamp());

    let role = "784762532216307728"



  

    if (rMember.roles.cache.has("784762532216307728")) return message.channel.send(new Discord.MessageEmbed().setDescription(':x: Bu kullanıcı zaten onaylı.').setColor(10038562));

    await (rMember.roles.add("784762532216307728"))

    message.channel.send(new Discord.MessageEmbed().setDescription(`${rMember} isimli üyeyi başarıyla onayladım! ✅`).setColor('RANDOM'));



};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['onay'],

  permLevel: "0"

};



exports.help = {

  name: "rolver",

  description: "Kişilere Rol Yetkisi Verir",

  usage: "rolver <mesaj>"

};

//çalıs pls :)