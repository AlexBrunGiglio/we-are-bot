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
        .setTitle('Bonjour à tous !')
        .setColor(0x72c8e2)
        .setDescription("Je viens vous apporter une superbe nouvelle ! \nComme vous le savez peut-être il y a sur le serveur un bot qui se nomme <@302050872383242240>. \n \nLe principe est de mettre tout les serveurs le possédant sur un site internet. Cependant les serveurs qui utilisent la commande `!d bump` sont mit en avant pour une durée de 2h.\n \nC'est pourquoi pour vous encourager à bumper nous avons créé un système de trophées ! \n \nTous les mois nous comptabiliserons vos bumps, ceux qui arriveront à bumper au moins 50 fois décrocheront le rôle <@&701195227393949747>  et devront remettre leurs titres en jeu le mois d'après !\n\nBon courage à tout le monde ! \n")
        // .addField('Serveur', message.guild.name)
        // .setThumbnail('https://images-ext-2.discordapp.net/external/kZlLHMBW7JS-FGa7mMNKQIGCyRi2-oHGVy35YguGRPQ/%3Fsize%3D256/https/cdn.discordapp.com/avatars/302050872383242240/67342a774a9f2d20d62bfc8553bb98e0.png')
        // .addField('Player Name', message.author.username);
        .setImage('https://images-ext-1.discordapp.net/external/tAuRcs-FCy2M8OaTS9Ims62J1vrFiviahjBDtpZrrBs/https/disboard.org/images/bot-command-image-bump.png')
        message.channel.send(embed);
      break;
    }
  }
}