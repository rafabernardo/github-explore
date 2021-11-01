const postCssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const postCssNormalize = require('postcss-normalize')
const postCssReset = require('postcss-css-reset')

module.exports = {
  plugins: [postCssNested, autoprefixer(), postCssNormalize(), postCssReset()],
}
