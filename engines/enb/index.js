'use strict';

const postcss = require('postcss');
const src = require('../src');
const plugins = require('../plugins');

module.exports = require('enb/lib/build-flow').create()
  .name('enb-sharps')
  .target('target', '?.css')
  .defineOption('config')
  .defineOption('source')
  .useSourceText('source', '?')
  .builder(function(preTargetSource) {
    const _this = this;
    _this._config = _this._config || {};
    _this._config.columns = _this._config.columns || 12;
    _this._config.columnsExceptOne = _this._config.columns - 1;

    return new Promise(function(resolve, reject) {
        postcss(plugins(_this._config)).process(src).then(function(gridResult) {
          return gridResult.css + preTargetSource;
        }).then(resolve).catch(reject);
    });
  })
  .createTech();
