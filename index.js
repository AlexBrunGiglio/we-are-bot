const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Help = require('./commands/help')
const Announce = require('./commands/announce')
const Welcome = require('./commands/welcome')
const { TOKEN } = require("./config");
const mysql = require('mysql');
const dateFormat = require('dateformat');
let connection;
const disboard = 302050872383242240;





bot.on('ready', function () {
    // bot.user.setAvatar('./avatar.png').catch(console.error)
    // bot.user.setGame('A votre service !').catch(console.error)

      connection = mysql.createConnection({
      host     : '127.0.0.1',
      port     : '3306',
      user     : 'wag',
      password : 'wearegamers',
      database : 'rasp_db'
    });

    connection.connect(err => {
      if(err){
        console.log('nikoumouk');
        console.log(err);
      }else{
        console.log("Je suis connecte a la base de donnee !");
      }
    });
  
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
      if (message.channel.id === '700773977081249834') {
          if (message.content.startsWith('!d bump')) {
              let date = message.createdAt;
              let user = message.author.id;
  
              if ((message.channel.id === '700773977081249834') && (message.author.id === 'disboard') && (message.content === 'Bump effectu�')) {
  
                  connection.query('SELECT id_autor, point FROM bump', (err, rows) => {
                      let count = Object.keys(rows).length;
  
                      if (err) throw err;
                      let sql;
                      if (count < 1 || count == null) {
                          sql = `INSERT INTO bump (id_autor, created_at, point) values ('${user}', '${date}', 1)`;
  
                      } else if (count > 0) {
                          var new_date = dateFormat(date, "yyyy-mm-dd HH:MM:ss");
                          sql = `UPDATE bump set created_at =\'${new_date}\' where id_autor = ${user}`;
                      }
                      connection.query(sql, console.log);
                  });
              }
          }
      }
  });

  bot.on('message', function (message) {    
    let commandUsed =
      Ping.parse(message) ||
      Help.parse(message) ||
      Announce.parse(message) ||
      Welcome.parse(message) ||
      Google.parse(message)
  });

  

bot.login(TOKEN);