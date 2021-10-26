const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const postcssNormalize = require('postcss-normalize')

module.exports = {
  plugins: [postcssNested, autoprefixer(), postcssNormalize()],
}
