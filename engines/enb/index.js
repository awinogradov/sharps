var postcss = require('postcss');
var src = require('../src');
var plugins = require('../plugins');

module.exports = require('enb/lib/build-flow').create()
    .name('enb-bem-grid')
    .target('target', '?.css')
    .defineOption('config')
    .defineOption('source')
    .useSourceText('source', '?')
    .builder(function(preTargetSource) {
        var _this = this;

        return new Promise(function(resolve) {
            postcss(plugins(_this._config)).process(src).then(function(gridResult) {
                return gridResult.css + preTargetSource;
            }).then(resolve);
        });
    })
    .createTech();
