const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("he | ro | ku", {type: "PLAYING"});
});

bot.on("message", async message => {
  
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;
 
 let prefix = '-' 
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 let args = messageArray.slice(1);
  
  try {
    
    
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(bot, msg, args);
  
  } catch (e) {
    console.log(e.stack);
  }
 
});   

bot.login(process.env.token)
