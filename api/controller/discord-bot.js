
const Discord = require('discord.js');

const client = new Discord.Client()

console.log('Discord Upload JS Load');

let event_message = []

event_message['first-run'] = message => {
  console.log('First message read, and purge this function')
  delete event_message['first-run']
}

client.login('ODIzODYwNzA5OTE3MzI3Mzcw.YFm-Ew.nTzOHu-pwjHd943efsRGtLJhXuw')
client.once('ready', ready => {
  console.log('Bot is up');
  let channel = client.channels.cache.get('823858846899503136')
  channel.send('Hello here!');
})

client.on('message', message => {
  console.log(message.content);
  if(message.embeds.length > 0)
    if(message.embeds[0].title === 'SPEEDCAT IMAGE UPLOAD')
      console.log(message.embeds[0]);

  // if (message.attachments.size > 0) {
  //   console.log(`Attached File : ${message.attachments.size}`)
  //   console.log(message.attachments.toJSON())
  // }
  // for (const key in event_message)
  //   if (typeof event_message[key] === 'function')
  //     event_message[key](message)
});

module.exports = { client, event_message }

