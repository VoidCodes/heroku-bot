exports.run = (bot, message, args, ops) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Ping")
  .addField("Pong!")
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed);
}
