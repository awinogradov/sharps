module.exports = function(config) {
  return [
    require('postcss-mixins'),
    require('postcss-simple-vars')({
      variables: config,
      silent: true
    }),
    require('postcss-for'),
    require('postcss-custom-media'),
    require('lost'),
    require('postcss-nested'),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')()
  ];
};
