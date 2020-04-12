const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Help = require('./commands/help')
const Announce = require('./commands/announce')
const Welcome = require('./commands/welcome')
const { TOKEN } = require("./config");


bot.on('ready', function () {
    // bot.user.setAvatar('./avatar.png').catch(console.error)
    // bot.user.setGame('A votre service !').catch(console.error)
  })
  
//   FONCTION MESSAGE PRIVE NOUVEAU MEMBRE
  bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
      return channel.send(
          { 
            "embed": {      //Message embed 
                "title": "Bienvenue sur We Are Gamers !",
                "description": "Nous espérons que tu vas t'amuser !\nSoit sûr de lire le <#416478130614697994> !\n\n__**Voici les liens du WAG :**__\n\n[Site Internet](https://wearegamers.online/) | [Youtube](https://www.youtube.com/channel/UCi7qtDdexjU-07KDdDFOsNw) | [Twitch](https://www.twitch.tv/weareonlive) | [Utip](https://utip.io/wearegamers) | [Invite tes amis](https://discord.gg/uNpSbZr)",
                "thumbnail": {
                    "url": "https://images-ext-1.discordapp.net/external/8ejf4mlVIWzN2qrbiSPnHEMrQ_NvG72nes1Kn6VGTMA/https/media.discordapp.net/attachments/416477999698018314/689834041326698627/t.gif"
                },
                "color": 2895667
        }})
    }).catch(console.error) 
  })
// FIN FONCTION MP   


  bot.on('message', function (message) {    
    let commandUsed =
      Ping.parse(message) ||
      Help.parse(message) ||
      Announce.parse(message) ||
      Welcome.parse(message) ||
      Google.parse(message)
  })

bot.login(TOKEN);