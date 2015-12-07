var path = require('path'),
    techs = {
        levels : require('enb-bem-techs/techs/levels'),
        provide : require('enb/techs/file-provider'),
        bemdecl : require('enb-bem-techs/techs/bemjson-to-bemdecl'),
        deps : require('enb-bem-techs/techs/deps-old'),
        files : require('enb-bem-techs/techs/files'),
        postcss : require('enb-postcss/techs/enb-postcss'),
        bemhtml : require('enb-bemxjst/techs/bemhtml'),
        borschik : require('enb-borschik/techs/borschik'),
        html : require('enb-bemxjst/techs/bemjson-to-html'),
        grid : require('../engines/enb-grid/techs/enb-grid')
    };

module.exports = function(config) {

    config.nodes('desktop.bundles/*', function(nodeConfig) {
        nodeConfig.addTech([techs.provide, { target : '?.bemjson.js' }]);

        nodeConfig.addTechs([
            [techs.levels, {
                levels : [
                    { path : path.join('libs', 'bem-core',  'common.blocks'), check : false },
                    { path : path.join('libs', 'bem-components',  'common.blocks'), check : false },
                    { path : 'test.blocks', check : true }
                ]
            }],
            [techs.bemdecl],
            [techs.deps],
            [techs.files]
        ]);

        nodeConfig.addTechs([
            [techs.postcss, {
                source : '?.css',
                target : '?.tmp.css',
                plugins : []
            }],
            [techs.grid, {
                source : '?.tmp.css',
                target : '?.css',
                config : {
                    maxWidth : '1100px',
                    gutter : '10px',
                    flex : 'flex'
                }
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

    config.node('dist/', function(nodeConfig) {
        nodeConfig.addTechs([
            [techs.levels, {
                levels : []
            }],
            [techs.provide, { target : '?.bemdecl.js' }],
            [techs.deps],
            [techs.files],
            [techs.postcss, {
                source : '?.css',
                target : '?.tmp.css',
                plugins : []
            }],
            [techs.grid, {
                source : '?.tmp.css',
                target : '?.tmp.grid.css',
                config : {
                    maxWidth : '1100px',
                    gutter : '10px',
                    flex : 'flex'
                },
                browsers : [
                    'last 2 versions',
                    'ie 10',
                    'ff 24',
                    'android 4',
                    'ios >= 5'
                ]
            }],
            [techs.borschik, { source : '?.tmp.grid.css', target : 'bem-grid.css', minify : false }],
            [techs.borschik, { source : '?.tmp.grid.css', target : 'bem-grid.min.css', minify : true }]
        ]);

        nodeConfig.addTargets([
            'bem-grid.css', 'bem-grid.min.css'
        ]);
    });
};
