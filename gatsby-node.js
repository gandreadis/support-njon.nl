const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const flatten = require('flat')

exports.onPreBootstrap = translateFiles

function translateFiles() {
  console.log('Copying locales')

  const nlTranslation = loadTranslationObject('nl')
  const enTranslation = loadTranslationObject('en')

  // Create directory structure
  fs.existsSync(path.join(__dirname, '/public/intl')) ||
    fs.mkdirSync(path.join(__dirname, '/public/intl'))

  // Save bundled translation files
  fs.writeFileSync(
    path.join(__dirname, '/public/intl/nl.json'),
    JSON.stringify(flatten(nlTranslation))
  )
  fs.writeFileSync(
    path.join(__dirname, '/public/intl/en.json'),
    JSON.stringify(flatten(enTranslation))
  )
}

function loadTranslationObject(languageCode) {
  const srcPath = path.join(__dirname, `/src/locales/${languageCode}/`)
  const translationObjects = fs.readdirSync(srcPath).map((file) =>
    yaml.load(fs.readFileSync(path.join(srcPath, file)), {
      encoding: 'utf-8',
    })
  )
  return Object.assign({}, ...translationObjects)
}
