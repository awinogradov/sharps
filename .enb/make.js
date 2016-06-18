'use strict';

const path = require('path');
const grid = require('../').postcss;
const autoprefixer = require('autoprefixer');
const techs = {
  levels: require('enb-bem-techs/techs/levels'),
  provide: require('enb/techs/file-provider'),
  deps: require('enb-bem-techs/techs/deps-old'),
  files: require('enb-bem-techs/techs/files'),
  postcss: require('enb-postcss/techs/enb-postcss')
};

module.exports = function(config) {
  config.node('dist/', function(nodeConfig) {
    nodeConfig.addTechs([
      [techs.levels, { levels: [] }],
      [techs.provide, { target: '?.bemdecl.js' }],
      [techs.deps],
      [techs.files],
      [techs.postcss, {
        source: '?.css',
        target: 'sharps.min.css',
        plugins: [
          grid({
            maxWidth: '1100px',
            gutter: '10px',
            flex: 'flex'
          }),
          autoprefixer([
            'last 2 versions',
            'ie 10',
            'ff 24',
            'android 4',
            'ios >= 5'
          ]),
          process.env.NODE_ENV === 'production' ?
            require('postcss-csso') :
            function() {}
        ]
      }]
    ]);

    nodeConfig.addTargets(['sharps.min.css']);
  });
};
