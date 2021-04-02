const fs = require('fs')

const extract = require('extract-zip')

class FilenamesData {
  /**
   * Extract files to destination folder, and returns folder content
   *
   * @param {String} folder Base folder
   * @param {String} files filenames
   */
  constructor(folder, files) {
    this.folder = folder
    this.files = files
  }

  /**
   * Get all full file directory
   *
   * @returns {String[]} Folder and content object
   */
  getAllFilelocation() {
    const fullFile = []
    this.files.forEach((item) => {
      fullFile.push(`${this.folder}\\${item}`)
    })
    return fullFile
  }
}
/**
 * Extract files to destination folder, and returns folder content
 *
 * @param {String} sourceZIP Source of compressed file.
 * @param {String} destinationFolder Destination folder for extraction
 * @returns {Promise<FilenamesData>} Folder and content object
 */
async function extractFiles(sourceZIP, destinationFolder) {
  await extract(sourceZIP, { dir: destinationFolder })
  return new FilenamesData(destinationFolder, fs.readdirSync(destinationFolder))
}

// const { zipDir, destinationDir } = require('./tempoary_data');
// extractFiles(zipDir, destinationDir).then((res) => {
//   console.log(res)
// })

module.exports = { extractFiles }
