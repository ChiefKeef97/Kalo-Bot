const Discord = require('discord.js');
const fs = require('fs')

exports.run = (client) => {
//========================  Bot Changing Status =======================//
  let statuses = [`play.kalo-mc.com`,
                  `${process.env.PREFIX}help`,
                  `Don\'t forget to vote!`,
                  `👻 H̸͖͗ͅa̵̛̹̬̼̫̺͋̿̆̋̈́̓͜p̷̢̪͖͙̅̃p̷̯̃̀̈͘y̸̧̬̣͉͍̾̌̈́͆̒̄͘͜͜͜ ̸̧͕̲̪̻̳̠̙̯̱́͂Ḩ̶̡̪̘̤̈́̋͛̇̾̈́̆̎͑̂ą̶̛̘̗͖͎̺͕͚̭̆̓̽̈́͗l̸̳͖̜̱̫̤͚̂́̔̈́͂̕͘l̷̤̘̭͕͕̼͂̏̾͌́̿̈́͘͝ō̷͇̓͌̅͘w̴̛̩͗̐̈́́̑̂̕͝͝e̷̘̺̰͐̆̅̈́͝e̷͖̱̜͗̑̔̈̋͆͛̑̌̕ͅń̸̛̗̪͇̼͊̈́̈̔͌̆ 👻`
                 ]
  
  setInterval(function() {
  let status = statuses[Math.floor(Math.random()*statuses.length)]
  
  client.user.setPresence({ status: 'streaming', game: { name: status, type: 'STREAMING', url: 'https://www.twitch.tv/twitch'} });
  }, 5000)
//========================  Ready Message  =======================//  
      console.log('▄ •▄  ▄▄▄· ▄▄▌            ▄▄▄▄·       ▄▄▄▄▄')
      console.log('█▌▄▌▪▐█ ▀█ ██•  ▪         ▐█ ▀█▪▪     •██  ')
      console.log('▐▀▀▄·▄█▀▀█ ██▪   ▄█▀▄     ▐█▀▀█▄ ▄█▀▄  ▐█.▪')
      console.log('▐█.█▌▐█ ▪▐▌▐█▌▐▌▐█▌.▐▌    ██▄▪▐█▐█▌.▐▌ ▐█▌·')
      console.log('·▀  ▀ ▀  ▀ .▀▀▀  ▀█▄▀▪    ·▀▀▀▀  ▀█▄▀▪ ▀▀▀ ')
      // console.log('▄▄▄  ▄▄▄ . ▄▄▄· ·▄▄▄▄   ▄· ▄▌              ')
      // console.log('▀▄ █·▀▄.▀·▐█ ▀█ ██▪ ██ ▐█▪██▌              ')
      // console.log('▐▀▀▄ ▐▀▀▪▄▄█▀▀█ ▐█· ▐█▌▐█▌▐█▪              ')
      // console.log('▐█•█▌▐█▄▄▌▐█ ▪▐▌██. ██  ▐█▀·.              ')
      // console.log('.▀  ▀ ▀▀▀  ▀  ▀ ▀▀▀▀▀•   ▀ •               ')
      // console.log(`${client.user.username} is ready`);
}
