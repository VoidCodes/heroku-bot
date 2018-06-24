exports.run = (bot, message, args) => {
  let pongembed = new Discord.RichEmbed()
  .setTitle("Ping")
  .addField("Pong!")
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed);
}
