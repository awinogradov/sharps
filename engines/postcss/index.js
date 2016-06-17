'use strict';

const postcss = require('postcss');
const src = require('../src');
const plugins = require('../plugins');

module.exports = postcss.plugin('postcss-sharps', function (opts) {
  opts = opts || {};
  opts.columns = opts.columns || 12;
  opts.columnsExceptOne = opts.columns - 1;
  
  return function(css) {
    return new Promise(function(resolve) {
      postcss(plugins(opts)).process(src).then(function(gridResult) {
        css.prepend(gridResult.css);
      }).then(resolve);
    });
  }
});
