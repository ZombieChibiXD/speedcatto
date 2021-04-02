const Discord = require('discord.js')

const client = new Discord.Client({
  restRequestTimeout: 40000,
})

console.log('Discord JS Load')

/**
 * This callback type is called `onMessageEventCallback` and is displayed as a global symbol.
 *
 * @callback onMessageEventCallback
 * @param {Discord.Message} message
 * @returns {number}
 */

/**
 * Discord.js Client on message event handler
 */
class MessageEventHandler {
  static CONTINUE = 0
  static DESTRUCT = -1
  static REPEAT = 1

  /**
   * @type {Object}
   */
  static Events = {}

  /**
   * Add a callback function to be run on Discord message received
   * @param {string} name Function callback name
   * @param {onMessageEventCallback} fn Function callback
   */
  static addEvent(name, fn) {
    MessageEventHandler.Events[name] = fn
  }

  /**
   *
   * @param {Discord.Message} message Discord message options
   */
  static run(message) {
    for (const name in MessageEventHandler.Events) {
      /**
       * @type {onMessageEventCallback}
       */
      const callback = MessageEventHandler.Events[name]
      let repeat = true
      while (repeat) {
        repeat = false
        let result = this.CONTINUE
        try {
          result = callback(message)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
        switch (result) {
          case MessageEventHandler.DESTRUCT:
            delete MessageEventHandler.Events[name]
            break
          case MessageEventHandler.REPEAT:
            repeat = true
            break
          case MessageEventHandler.CONTINUE:
            continue
          default:
            // eslint-disable-next-line no-console
            console.error(
              `Unsafe onMessageEventCallback return @MessageEventHandler.Events[${name}] callback!`,
            )
        }
      }
    }
  }
}

MessageEventHandler.addEvent('check-messages', (message) => {
  if (message.content.length > 0) console.log(message.content)
  if (message.embeds.length > 0)
    if (message.embeds[0].title === 'SPEEDCAT IMAGE UPLOAD')
      console.log(message.embeds[0])
  return MessageEventHandler.CONTINUE
})

const { discordAuthKey } = require('./../../env');
client.login(discordAuthKey)
client.once('ready', (ready) => {
  console.log('Bot is up')
  const channel = client.channels.cache.get('823858846899503136')
  channel.send('Hello here!')
})

client.on('message', (message) => {
  MessageEventHandler.run(message)
})

module.exports = {
  client,
  MessageEventHandler,
}
