var environ         = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    BEMCORE_TECHS   = environ.getLibPath('bem-core', '.bem/techs'),
    BEMPR_TECHS     = environ.getLibPath('bem-pr', 'bem/techs');

exports.getTechs = function() {
    var techs = {
        'blocks'     : 'level-proto',
        'examples'   : 'level-proto',
        'specs'      : 'level-proto',
        'tests'      : 'level-proto',
        'bemjson.js' : 'v2/bemjson.js',
        'bemdecl.js' : 'v2/bemdecl.js',
        'deps.js'    : 'v2/deps.js',
        'css'        : 'v2/css',
        'stylus'     : 'v2/styl.js',
        'js'         : 'v2/js-i'
    };

    [
        'browser.js',
        'bemhtml',
        'vanilla.js',
        'md'
    ].forEach(getTechResolver(techs, BEMCORE_TECHS));

    [
        'spec.js',
        'spec.js+browser.js+bemhtml',
        'spec.bemjson.js'
    ].forEach(getTechResolver(techs, BEMPR_TECHS));

    return techs;
};

exports.defaultTechs = ['stylus', 'browser.js', 'bemhtml', 'md'];
