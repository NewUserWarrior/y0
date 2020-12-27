const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    message.channel.send("Eren Naber Kardeşim!")
}
















exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['eren', 'erenaq'],
    permLevel: 0
};

exports.help = {
    name: 'erenamk',
    description: 'erenyaramıye',
    usage: 'yarrak'
};