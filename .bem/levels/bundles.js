var dirs            = require('../../package.json')._directories,
    path            = require('path'),
    environ         = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    PRJ_ROOT        = environ.PRJ_ROOT,
    PRJ_TECHS       = path.resolve(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS   = environ.getLibPath('bem-core', '.bem/techs');

exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {
    var techs = this.__base();

    // Use techs from lib bem-core
    ['html'].forEach(getTechResolver(techs, BEMCORE_TECHS));

    return techs;
};

exports.defaultTechs = ['bemjson.js'];
