const Command = require('./command')
const Discord = require('discord.js')
const prefix = '*';

module.exports = class Help extends Command {

  static match (message) {
    return message.content.startsWith('*bot')
  }

  static action (message) {
    // message.reply('Que puis-je pour vous ?')

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
      case 'bot' :
        const embed = new Discord.MessageEmbed()
        .setTitle('Informations Bot')
        .setColor(0x13E316)
        .addField('Version du bot', '1.0.0')
        .addField('Pour', message.guild.name)
        .setThumbnail('https://images-ext-1.discordapp.net/external/8ejf4mlVIWzN2qrbiSPnHEMrQ_NvG72nes1Kn6VGTMA/https/media.discordapp.net/attachments/416477999698018314/689834041326698627/t.gif')
        .addField('Créateur', message.author.username);
        message.channel.send(embed);
      break;
    }
  }
}
