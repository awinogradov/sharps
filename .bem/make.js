var PATH    = require('path'),
    environ = require('bem-environ')(__dirname),
    U       = require('bem').util;

require('bem-tools-autoprefixer').extendMake(MAKE);

try {
    require(environ.getLibPath('bem-pr', 'bem/nodes'))(MAKE);
} catch(e) {
    if(e.code !== 'MODULE_NOT_FOUND')
        throw e;
    require('bem/lib/logger').warn('"bem-pr" is not installed');
}

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,
    bundlesLevelsRegexp : /^.+?\.pages$/,

    createCustomNodes : function() {
        var SetsNode = MAKE.getNodeClass('SetsNode');

        if(typeof SetsNode.createId === 'undefined') {
            return;
        }

        return SetsNode
            .create({ root : this.root, arch : this.arch })
            .alterArch();
    }

});

MAKE.decl('SetsNode', {

    /**
     * Описание уровней-источников для сетов
     * @returns {Object}
     */
    getSets : function() {
        return {
            'desktop' : [
                'common.blocks',
                'design/common.blocks',
                'test.blocks'
            ]
        };
    },

    getSourceTechs : function() {
        return ['examples', 'tests', 'specs'];
    }

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'stylus',
            'css',
            'bemhtml',
            'browser.js+bemhtml',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['stylus']);
    },

    getLevels : function() {
        return [
            'libs/bem-core/common.blocks',
            'libs/bem-components/common.blocks',
            'common.blocks',
            'test.blocks'
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

MAKE.decl('SpecNode', {

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'stylus',
            'css',
            'spec.js+browser.js+bemhtml',
            'bemhtml',
            'html',
            'phantomjs'
        ];
    },

    getForkedTechs : function() {
        return [
            'bemhtml',
            'spec.js+browser.js+bemhtml',
            'phantomjs'
        ];
    },

    getLevels : function() {
        return this.__base.apply(this, arguments)
            .concat(environ.getLibPath('bem-pr', 'spec.blocks'));
    }

});
