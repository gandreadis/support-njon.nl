const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const flatten = require('flat')
const fetch = require('isomorphic-fetch')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.onPreBootstrap = () => {
  translateFiles()
  loadPetitionCount()
}

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

function loadPetitionCount() {
  (async () => {
    console.log("Loading petition website")
    const response = await fetch('https://petities.nl/petitions/voorwaarts-mars-ruimte-voor-marsmuziek');
    const text = await response.text();
    console.log("Parsing petition website")
    const dom = await new JSDOM(text);
    const countString = dom.window.document.querySelector(".petition-intro-info-counter").textContent;
    const count = countString.split(" ")[0];
    console.log(`Count ${count}`)
    process.env.PETITION_COUNT = count;
  })()
}
