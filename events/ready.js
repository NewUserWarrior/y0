const chalk = require('chalk');
const moment = require('moment');
require("moment-duration-format");
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
        var SaBenKwejN = ''
      if(moment().format('MM') === '01') {
                var SaBenKwejN = `${moment().format('DD')} Ocak ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '02') {
                var SaBenKwejN = `${moment().format('DD')} Şubat ${moment().format('YYYY')} `
            }
      if(moment().format('MM') === '03') {
                var SaBenKwejN = `${moment().format('DD')} Mart ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '04') {
                var SaBenKwejN = `${moment().format('DD')} Nisan ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '05') {
                var SaBenKwejN = `${moment().format('DD')} Mayıs ${moment().format('YYYY')} `
            }
      if(moment().format('MM') === '06') {
                var SaBenKwejN = `${moment().format('DD')} Haziran ${moment().format('YYYY')} `
            }
      if(moment().format('MM') === '07') {
                var SaBenKwejN = `${moment().format('DD')} Temmuz ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '08') {
                var SaBenKwejN = `${moment().format('DD')} Ağustos ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '09') {
                var SaBenKwejN = `${moment().format('DD')} Eylül ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '10') {
                var SaBenKwejN = `${moment().format('DD')} Ekim ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '11') {
                var SaBenKwejN = `${moment().format('DD')} Kasım ${moment().format('YYYY')} `
            }
            if(moment().format('MM') === '12') {
                var SaBenKwejN = `${moment().format('DD')} Aralık ${moment().format('YYYY')} `
            }
  client.user.setStatus("dnd");
  client.user.setActivity(`</> ${SaBenKwejN}`, { type: "WATCHING"});
};