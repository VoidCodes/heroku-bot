const Discord = require("discord.js")

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Ping")
  .setColor(0x00AE86)
  .addField("Pong!")
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed);
}
