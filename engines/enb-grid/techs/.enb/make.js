var path = require('path'),
    techs = {
        levels : require('enb-bem-techs/techs/levels'),
        provide : require('enb/techs/file-provider'),
        deps : require('enb-bem-techs/techs/deps-old'),
        files : require('enb-bem-techs/techs/files'),
        postcss : require('enb-postcss/techs/enb-postcss')
    };

module.exports = function (grid, browsers) {
    return function(config) {
        config.node('build/', function(nodeConfig) {
            nodeConfig.addTechs([
                [techs.levels, {
                    levels : [
                        { path : '../../../common.blocks' }
                    ]
                }],
                [techs.provide, { target : '?.bemdecl.js' }],
                [techs.deps],
                [techs.files],
                [techs.postcss, {
                    plugins : require('../../../../.enb/postcss-plugins')({
                        grid : grid,
                        browsers : browsers
                    })
                }]
            ]);

            nodeConfig.addTargets([
                '?.css'
            ]);
        });
    };
};
