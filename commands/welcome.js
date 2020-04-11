const Command = require('./command')
const Discord = require('discord.js')
const prefix = '*';

module.exports = class Welcome extends Command {

  static match (message) {
    return message.content.startsWith('*wel')
  }

  static action (message) {
    // message.reply('Que puis-je pour vous ?')

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
      case 'wel' :
        const embed = new Discord.MessageEmbed()
        .setTitle('Bienvenue sur WAG !')
        .setColor(0x2EC5E7)
        .setDescription("Nous espérons que tu vas t'amuser ! \n Soit sûr de lire le <#416478130614697994> ! \n \n __**Voici les liens du WAG :**__ \n \n [Site Internet](https://wearegamers.online/) | [Youtube](https://www.youtube.com/channel/UCi7qtDdexjU-07KDdDFOsNw) | [Twitch](https://www.twitch.tv/weareonlive) | [Utip](https://utip.io/wearegamers) | [Invite tes amis](https://discord.gg/uNpSbZr)")
        // .addField('Serveur', message.guild.name)
        .setThumbnail('https://images-ext-1.discordapp.net/external/8ejf4mlVIWzN2qrbiSPnHEMrQ_NvG72nes1Kn6VGTMA/https/media.discordapp.net/attachments/416477999698018314/689834041326698627/t.gif')
        // .addField('Player Name', message.author.username);
        message.channel.send(embed);
      break;
    }
  }
}
