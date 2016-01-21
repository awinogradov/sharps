var path = require('path'),
    grid = require('../').postcss,
    autoprefixer = require('autoprefixer'),
    techs = {
        levels : require('enb-bem-techs/techs/levels'),
        provide : require('enb/techs/file-provider'),
        bemdecl : require('enb-bem-techs/techs/bemjson-to-bemdecl'),
        deps : require('enb-bem-techs/techs/deps-old'),
        files : require('enb-bem-techs/techs/files'),
        postcss : require('enb-postcss/techs/enb-postcss'),
        bemhtml : require('enb-bemxjst/techs/bemhtml'),
        borschik : require('enb-borschik/techs/borschik'),
        html : require('enb-bemxjst/techs/bemjson-to-html')
    };

module.exports = function(config) {

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
                plugins : [
                    grid({
                        maxWidth : '1100px',
                        gutter : '10px',
                        flex : 'flex'
                    }),
                    autoprefixer([
                        'last 2 versions',
                        'ie 10',
                        'ff 24',
                        'android 4',
                        'ios >= 5'
                    ])
                ]
            }],
            [techs.borschik, { source : '?.css', target : 'bem-grid.css', minify : false }],
            [techs.borschik, { source : '?.css', target : 'bem-grid.min.css', minify : true }]
        ]);

        nodeConfig.addTargets([
            'bem-grid.css', 'bem-grid.min.css'
        ]);
    });
};
