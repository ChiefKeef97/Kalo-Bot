  const d = require ('discord.js')
module.exports.run = (client, message, args) => {
  if(message.author.id == process.env.RALID || message.author.id == process.env.FREAKID) { 
  if (args[0] === 'client.token') {
 let embede = new d.RichEmbed()
    .setColor(`#00ff00`)
      .addField("**```Input```**", "```js\n" + args.join(" ") + "```")
        .addField("**```Output```**", "```js\n" + '(ノಠ益ಠ)ノ 彡 ┻━┻' + "```")
          message.channel.send(embede)
  return;
  };
    
    
  var code = args.join(" ");
  try {
    var evaled = eval(code);
    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);
    let embed = new d.RichEmbed()
    .setColor(`#00ff00`)
      .addField("**```Input```**", "```js\n" + args.join(" ") + "```")
        .addField("**```Output```**", "```js\n" + clean(evaled) + "```")
    
    if(clean(evaled).size < 30) {
    const hastebin = require('hastebin-gen');
    hastebin(`${clean(evaled)}`, "txt").then(r => {
    let embed = new d.RichEmbed()
            .setColor(`#00ff00`)
              .addField("**```Input```**", "```js\n" + args.join(" ") + "```")
                .addField("**```Output To Large```**", "`" + r + "`")
                  }).catch(console.error)}; 
                    message.channel.send(embed)
                      } catch (err) {
                        message.channel.send( {embed: { title: "`ERROR`", description:" ```xl\n" + clean(err) +"\n```", color: 0xff0000 }});}} 
                          else return message.channel.send
                            (`Sorry this command is a weakness to our bot, so it has been locked to the devs. Sorry!`)};

    function clean(text) {
      if (typeof(text) === "string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text.replace(`client.token`, 'No u');
          } else {
            return text}}

    exports.conf = {
      aliases: ['eval', 'e', 'code']
    };

    exports.help = {
      name: 'eval',
      description: '$@#! (ノಠ益ಠ)ノ 彡 ┻━┻', 
      usage: ' Im sorry... ┬──┬ ノ( ゜-゜ノ)'
    }