const Discord = require('discord.js');

exports.run = async(client, message, args) => {

if(message.members.hasPermission("BAN_MEMBERS")) return message.reply("Yetkiniz Bulunamadı")

    var guild = message.guild;
    if(!args[0]) return message.reply("Banlanacak Kişiyi Etiketle!")
    var kisi = message.mentions.users.first() || guild.members.cache.find(u => u.username === args[0]) || guild.members.cache.get(args[0]) || client.members.cache.get(args[0]) || client.members.cache.find(u => u.id === args[0]);
var neden = args.slice(1).join('') ? args.slice(1).join('') : "Neden Belirtilmemiş"


if (!kisi) return message.reply("Kişi Sunucuda Bulunamadı!")

await kisi.send(`${guild} adlı sunucudan banlandınız. \nNedeni: ${neden}`)
await guild.members.ban(kisi, { reason: neden});

var libra = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`** ${kisi} Banned ☠. \nNeden: ${neden} **`)
.setTimestamp()
message.channel.send(libra)
 

};


exports.conf = {
    aliases: [],
    permLevel: 2         
  };
  
  exports.help = {
    name: 'ban',
    description: 'Bir kullanıcı Sunucudan Banlar!',
    usage: 'ban'
  };