const { generateTemplateFiles } = require('generate-template-files')
const { getTemplateConfig } = require('./templateConfig')

const configItems = getTemplateConfig((result) => {
  console.log(JSON.stringify(result))

  // post processing of files
})

generateTemplateFiles(configItems)
