exports.run = (bot, message, args, ops) => {

  if (message.author.id !== ops.ownerID) return message.channel.send('This is a owner only command');
  
  try {
    delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch(e) {
    return message.channel.send(`Cant reload: ${args[0]}`);
  }
  message.channel.send(`Successfully reloaded: ${args[0]}`)
}
