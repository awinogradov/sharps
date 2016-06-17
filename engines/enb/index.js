'use strict';

const postcss = require('postcss');
const src = require('../src');
const plugins = require('../plugins');

module.exports = require('enb/lib/build-flow').create()
  .name('enb-bem-grid')
  .target('target', '?.css')
  .defineOption('config')
  .defineOption('source')
  .useSourceText('source', '?')
  .builder(function(preTargetSource) {
    const _this = this;
    _this.config = _this.config || {};
    _this.config.columns = _this.config.columns || 12;
    _this.config.columnsExceptOne = _this.config.columns - 1;

    return new Promise(function(resolve) {
        postcss(plugins(_this._config)).process(src).then(function(gridResult) {
            return gridResult.css + preTargetSource;
        }).then(resolve);
    });
  })
  .createTech();
