var vowFs = require('enb/lib/fs/async-fs'),
    make = require('enb/lib/api/make'),
    path = require('path'),
    exec = require('child_process').exec;

module.exports = require('enb/lib/build-flow').create()
    .name('enb-bem-grid')
    .target('target', '?.css')
    .defineOption('config')
    .defineOption('browsers')
    .defineOption('source')
    .useSourceText('source', '?')
    .builder(function(preTargetSource) {
        var _this = this,
            prefixedConfig = {};
        Object.keys(_this._config).forEach(function(key) {
            prefixedConfig['grid' + capitalize(key)] = _this._config[key];
        });

        return make([], {
            dir : __dirname,
            config : require('./.enb/make.js')(prefixedConfig, this._browsers)
        }).then(function() {
            return vowFs.read(path.join(__dirname, 'build', 'build.css'), 'utf8')
                        .then(function(gridRes) {
                            return gridRes + preTargetSource;
                        });
        });
    })
    .createTech();

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
