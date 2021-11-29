const { start, destory } = require('./utils/file')
const schema = require('./utils/schema.json')
const { validate } = require('schema-utils')
const { resolve } = require('path')

// 配置设置
const options = {
  /** svg路径 */
  dirPath: [resolve(__dirname, '..', '..', './src/icons/svg'), resolve(__dirname, '..', '..', './src/icons/svg/directory-navigation')],

  /** 端口配置 */
  port: 8900
}

validate(schema, options, {
  name: 'SvgPreviewPlugin',
  baseDataPath: 'options'
})

destory()
start(options)
