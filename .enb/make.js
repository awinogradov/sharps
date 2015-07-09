var path = require('path'),
    techs = {
        levels : require('enb-bem-techs/techs/levels'),
        provide : require('enb/techs/file-provider'),
        bemdecl : require('enb-bem-techs/techs/bemjson-to-bemdecl'),
        deps : require('enb-bem-techs/techs/deps-old'),
        files : require('enb-bem-techs/techs/files'),
        postcss : require('enb-postcss/techs/enb-postcss'),
        bemhtml : require('enb-bemxjst/techs/bemhtml'),
        html : require('enb-bemxjst/techs/html-from-bemjson')
    };

module.exports = function(config) {

    config.nodes('desktop.bundles/*', function(nodeConfig) {
        nodeConfig.addTech([techs.provide, { target : '?.bemjson.js' }]);

        nodeConfig.addTechs([
            [techs.levels, {
                levels : [
                    { path : path.join('libs', 'bem-core',  'common.blocks'), check : false },
                    { path : 'common.blocks', check : true },
                    { path : 'test.blocks', check : true }
                ]
            }],
            [techs.bemdecl],
            [techs.deps],
            [techs.files]
        ]);

        nodeConfig.addTechs([
            [techs.postcss, {
                sourcemap : true,
                plugins : require('./postcss-plugins')
            }],
            [techs.bemhtml, {
                devMode : false
            }],
            [techs.html]
        ]);

        nodeConfig.addTargets([
            '?.css', '?.html'
        ]);
    });
};
