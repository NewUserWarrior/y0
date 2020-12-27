const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    message.channel.send("Heey! Destek Lazım Destek Ekibi Çabuk Buraya Bakman Gerek! <@493793808408903681>")
}
















exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['destek', 'destekekibi'],
    permLevel: 0
};

exports.help = {
    name: 'destekcagir',
    description: 'Destek Ekibini Etiketler',
    usage: 'destek'
};