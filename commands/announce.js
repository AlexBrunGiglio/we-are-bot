const Command = require('./command')
const Discord = require('discord.js')
const prefix = '*';

module.exports = class Announce extends Command {

  static match (message) {
    return message.content.startsWith('*an')
  }

  static action (message) {
    // message.reply('Que puis-je pour vous ?')

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
      case 'an' :
        const embed = new Discord.MessageEmbed()
        .setTitle('Hello le WAG !')
        .setColor(0x2EC5E7)
        .setDescription("Après des mois d'absence sur le serveur je suis de retour avec de toutes nouvelles fonctionnalités ! \n En effet je serai en ligne sur le serveur pour vous voir vous amuser et aussi vous aider en cas de besoin. \n  Sachez que je serai en constante évolution sur le serveur et que je risque parfois de m'absenter pour ajouter mes nouvelles fonctionnalités. \n \n Dorénavant tout les nouveaux membres du serveur recevront ce message à leur arrivée !")
        // .addField('Serveur', message.guild.name)
        .setThumbnail('https://images-ext-1.discordapp.net/external/8ejf4mlVIWzN2qrbiSPnHEMrQ_NvG72nes1Kn6VGTMA/https/media.discordapp.net/attachments/416477999698018314/689834041326698627/t.gif')
        // .addField('Player Name', message.author.username);
        message.channel.send(embed);
      break;
    }
  }
}
