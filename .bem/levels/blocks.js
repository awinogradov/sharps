var path            = require('path'),
    environ         = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    PRJ_ROOT        = environ.PRJ_ROOT,
    PRJ_TECHS       = path.resolve(PRJ_ROOT, '.bem/techs'),
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
        'bemhtml',
        'vanilla.js',
        'md'
    ].forEach(getTechResolver(techs, BEMCORE_TECHS));

    [
        'spec.js',
        'spec.js+browser.js+bemhtml',
        'spec.bemjson.js'
    ].forEach(getTechResolver(techs, BEMPR_TECHS));

    [
        'browser.js'
    ].forEach(getTechResolver(techs, PRJ_TECHS));

    return techs;
};

exports.defaultTechs = ['stylus', 'browser.js', 'bemhtml', 'md'];
