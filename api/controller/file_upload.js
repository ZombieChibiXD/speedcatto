// const checklist = [
//   {
//     filename: 'Item 1',
//     unpacked: true,
//     uploaded: false,
//   },
//   {
//     filename: 'Item 2',
//     unpacked: true,
//     uploaded: true,
//   },
//   {
//     filename: 'Item 3',
//     unpacked: true,
//     uploaded: false,
//   },
//   {
//     filename: 'Item 4',
//     unpacked: false,
//     uploaded: false,
//   },
// ]
// const incomplete = []

// checklist.forEach((item) => {
//   if (item.uploaded === false) incomplete.push(item)
// })
// if (incomplete.length > 0) {
//   console.log('Checklist is incomplete!')
//   console.log(incomplete)
// } else console.log('Checklist is compeleted!')

const Discord = require('discord.js')
const { client } = require('./discord-bot')
const { extractFiles } = require('./file_unpack')
const { zipDir, destinationDir } = require('./tempoary_data')

async function uploadFiles(fileStack) {
  const stack = fileStack.reverse()
  const channel = client.channels.cache.get('823858846899503136')
  let retryLimit = 10
  while (stack.length > 0) {
    for (let i = stack.length - 1; i >= 0; i--) {
      const item = stack[i]
      let success = true
      console.log('Sending stack: ')
      console.log(item)
      try {
        await channel.send(item)
      } catch (error) {
        success = false
        console.error(error)
      }
      if (success) stack.splice(i, 1)
    }
    if (--retryLimit < 0) break
  }
}
// channel.send({ embed, files: [attachment] })
// .then(() => {
//   console.log('Sent!');
// })
// .catch((err) => {
//   console.log('Failed!')
//   console.error(err)
//   channel.send({ embed, files: [attachment] })
// })

extractFiles(zipDir, destinationDir).then((filedata) => {
  console.log('File unpacked')
  console.log('Running File Upload SetTimeout')
  const content = {
    series_id: '0xDEADBEEF',
    series_name: 'My Series Name',
    chapter_id: '0xCOFFEEBABE',
    chapter_name: '49',
    images: [],
  }
  content.images = filedata.getAllFilelocation()
  const stack = []
  for (let i = 0; i < content.images.length; i++) {
    const item = content.images[i]
    const name = filedata.files[i]
    const attachment = new Discord.MessageAttachment(item, name)
    const embed = new Discord.MessageEmbed()
      .setTitle('SPEEDCAT IMAGE UPLOAD')
      .setDescription(name)
      .setColor('#DEADAF')
      .setImage(`attachment://${name}`)
      .setFooter(`Item #${i + 1} of ${content.images.length}`)
      .addFields(
        { name: 'series_id', value: content.series_id },
        { name: 'series_name', value: content.series_name },
        { name: 'chapter_id', value: content.chapter_id },
        { name: 'chapter_name', value: content.chapter_name },
        { name: 'image_name', value: name },
      )
    stack.push({ embed, files: [attachment] })
  }
  uploadFiles(stack)
})

// app get /upload

const formdata = {
  series_name: 'My series name',
  chapter_name: 'My chapter name',
  zipFile: zipDir,
  uploader: 'Name',
}
// mongo db add series if not
