module.exports = {
  themes: ['sharps'],
  langs: ['en'],
  output: 'gh-pages',
  postcssPlugins: [
    require('bem-grid').postcss({
      maxWidth: '1100px',
      gutter: '20px',
      flex: 'flex'
    }),
    require('postcss-nested'),
    require('postcss-font-magician')
  ]
};
