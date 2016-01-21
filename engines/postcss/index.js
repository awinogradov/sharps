var postcss = require('postcss');
var src = require('../src');
var plugins = require('../plugins');

module.exports = postcss.plugin('postcss-bem-grid', function (opts) {
    opts = opts || {};
    return function(css) {
        return new Promise(function(resolve) {
            postcss(plugins(opts)).process(src).then(function(gridResult) {
                css.prepend(gridResult.css);
            }).then(resolve);
        });
    }
});
