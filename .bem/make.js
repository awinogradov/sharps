var PATH = require('path'),
    environ = require('bem-environ')(__dirname),
    U = require('bem').util;

require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,
    bundlesLevelsRegexp : /^.+?\.pages$/,

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'stylus',
            'css',
            'js',
            'bemhtml',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['stylus']);
    },

    getLevels : function() {
        return [
            'libs/bem-core/common.blocks',
            'common.blocks',
            'design/common.blocks'
        ];
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('stylus');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

MAKE.decl('AutoprefixerNode', {

    getBrowsers : function() {
        return [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'opera 12.16',
            'android 4',
            'ios 5',
            'ie 10'
        ];
    }

});
