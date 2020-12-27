const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    message.channel.send("`Freak` Seni Seviyorum :) :)!")
}
















exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['khalimba', 'erenaq'],
    permLevel: 0
};

exports.help = {
    name: 'freak',
    description: 'erenyaramıye',
    usage: 'yarrak'
};