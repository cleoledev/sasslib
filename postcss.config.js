const IS_BUILD = process.env.BUILD === 'true'
const routeList = require('./src/utils/routeList.js')

module.exports = {
  plugins: [
    IS_BUILD &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue'],
        defaultExtractor (content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          )
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          )
        },
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /^tag-/,
          ...routeList
        ]
      }),
    require('autoprefixer')
  ]
}
