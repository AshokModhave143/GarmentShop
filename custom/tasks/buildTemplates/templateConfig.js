const { CaseConverterEnum } = require('generate-template-files')

/**
 * Paths
 */
const templatePath = 'custom/templates'
const appPath = 'app'

/**
 * Callback function
 * @param {} callback function for post processing
 * @returns
 */
function getTemplateConfig(callback) {
  const onComplete = (result) => {
    callback(result)
  }
  const itemConfiguration = [
    {
      option: 'Component',
      defaultCase: CaseConverterEnum.PascalCase,
      entry: {
        folderPath: templatePath + '/component',
      },
      stringReplacers: [{ question: 'Enter component name (pascalCase):', slot: '__name__' }],
      output: {
        path: appPath + '/components/__name__(kebabCase)',
        pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
        overwrite: true,
      },
      onComplete,
    },
    {
      option: 'Navigator',
      defaultCase: CaseConverterEnum.PascalCase,
      entry: {
        folderPath: templatePath + '/navigator',
      },
      stringReplacers: [{ question: 'Enter navigator name (pascalCase):', slot: '__name__' }],
      output: {
        path: appPath + '/navigators/__name__(kebabCase)',
        pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
        overwrite: true,
      },
      onComplete,
    },
    {
      option: 'Screen',
      defaultCase: CaseConverterEnum.PascalCase,
      entry: {
        folderPath: templatePath + '/screen',
      },
      stringReplacers: [{ question: 'Enter screen name (pascalCase):', slot: '__name__' }],
      output: {
        path: appPath + '/screens/__name__(kebabCase)',
        pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
        overwrite: true,
      },
      onComplete,
    },
    {
      option: 'Redux-saga',
      defaultCase: CaseConverterEnum.PascalCase,
      entry: {
        folderPath: templatePath + '/redux-saga',
      },
      stringReplacers: [{ question: 'Enter redux-saga name (pascalCase):', slot: '__name__' }],
      output: {
        path: appPath + '/reduxStore/__name__(kebabCase)',
        pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
        overwrite: true,
      },
      onComplete,
    },
  ]

  return itemConfiguration
}

module.exports = { getTemplateConfig }
