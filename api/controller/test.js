const Discord = require('discord.js')
const { client } = require('./discord-bot')

client.on('ready', (ready) => {
  console.log('Running TestJS SetTimeout')
  setTimeout(() => {
    const channel = client.channels.cache.get('823858846899503136')
    const content = {
      series_id: '0xDEADBEEF',
      series_name: 'Series Name',
      chapter_id: '0xCOFFEEBABE',
      chapter_name: 'Big dommy goth ougi GF',
      images: [
        '001.JPG',
        '002.JPG',
        '003.JPG',
        '004.JPG',
        '005.JPG',
        '006.JPG',
      ],
    }
    let count = 0
    for (const item of content.images) {
      const attachment = new Discord.MessageAttachment(
        './images/default/image.jpg',
        item,
      )
      const embed = new Discord.MessageEmbed()
        .setTitle('SPEEDCAT IMAGE UPLOAD')
        .setColor('#DEADAF')
        .setImage(`attachment://${item}`)
        .setFooter(`Item #${++count} of ${content.images.length}`)
        .addFields(
          { name: 'series_id', value: content.series_id },
          { name: 'series_name', value: content.series_name },
          { name: 'chapter_id', value: content.chapter_id },
          { name: 'chapter_name', value: content.chapter_name },
          { name: 'image_name', value: item },
        )
      channel.send({ embed, files: [attachment] })
    }
  }, 1 * 1000)
})
