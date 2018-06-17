const Discord = require("discord.js");

exports.run = (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#120afc")
  .addField("Member Commands", "ping")
  .addField("ping", "Usage:-ping")
  
  message.member.send(helpembed);

  if(message.member.hasPermission("ADMINISTRATOR")){
  
   let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#8b3aad")
  .addField("Mod Commands", "reload")
  .addField("reload", "Usage:$reload [command]")
  
  message.author.send(modembed);
  
  }
}
