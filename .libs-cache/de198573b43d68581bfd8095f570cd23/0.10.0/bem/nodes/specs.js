var PATH = require('path'),
    BEM = require('bem'),
    Q = require('q'),
    U = BEM.util;

module.exports = function(registry) {

registry.decl('SetNode', {

    'create-specs-node' : function(item, sourceNode, setNode) {
        return this.createLevelNode(item, sourceNode, setNode, 'SpecsLevelNode');
    }

});

registry.decl('SpecsLevelNode', 'TargetLevelNode', {

    __constructor : function(o) {
        U.extend({}, o.item, { suffix : '.specs', tech : 'spec' });
        this.__base(o);
    },

    getSpecsLevelItem : function(item) {
        var tech = this.getSpecsLevelTechName();
        return U.extend({}, item, {
            suffix : '.' + tech,
            tech : tech
        });
    },

    getSpecsLevelTechName : function() {
        return 'specs';
    },

    getProtoLevelName : function() {
        return 'specs-set';
    },

    getSpecContent : function(item) {
        var normalized = {
                block : item.block
            },
            isElem = false;

        if(item.elem) {
            isElem = true;
            normalized.elem = item.elem;
        }

        if(item.mod) {
            var tmods = normalized[isElem? 'elemMods' : 'mods'] = {};
            tmods[item.mod] = item.val || '';
        }

        return normalized;
    },

    createBundleNode : function(item, source) {
        var arch = this.ctx.arch,
            BundleNode = registry.getNodeClass(this.getBundleNodeClassName()),
            opts = {
                root  : this.root,
                level : this.path,
                item  : item,
                source : source,
                bundleName : item.block,
                bundleContent : JSON.stringify(this.getSpecContent(this.item))
            };

        if(arch.hasNode(BundleNode.createId(opts))) {
            return null;
        }

        var bundleNode = BundleNode.create(opts);
        arch.setNode(bundleNode);

        return bundleNode;
    },

    alterArch : function() {
        var base = this.__base(),
            arch = this.ctx.arch;

        return function() {
            return Q.when(base.call(this), function(level) {
                var item = {
                        block : this.techName.replace(/\./g, '-')
                    },
                    source = U.extend({ level : this.path }, this.item),
                    bundleNode = this.createBundleNode(item, source);

                if(bundleNode) {
                    arch
                        .addParents(bundleNode, level)
                        .addChildren(bundleNode, [this.getRealLevelNode().levelPath, this]);
                }

                return Q.when(this.takeSnapshot('After SpecsLevelNode alterArch ' + this.getId()));
            }.bind(this));
        };
    },

    getBundleNodeClassName : function() {
        return 'SpecNode';
    }

});

registry.decl('SpecNode', 'TargetBundleNode', {

    __constructor: function(o) {
        o.item.tech = 'bemjson.js';

        var env = global.__bempr || (global.__bempr = {});
        this.testId = PATH.join(o.root, o.level, o.item.block);

        env[this.testId] = {
            bundleName : o.bundleName,
            bundleContent : o.bundleContent
        };

        this.__base(o);
    },

    createTechNode : function(tech, bundleNode, magicNode) {
        if(tech === this.item.tech) {
            // Use `spec.bemjson.js` tech instead of `bemjson.js`
            return this.createSourceItemNode(tech, bundleNode, magicNode);
        }
        return this.__base.apply(this, arguments);
    },

    createSourceItemNode : function(tech, bundleNode, magicNode) {
        tech = 'spec.bemjson.js';
        return this['create-' + tech + '-node'](tech, bundleNode, magicNode);
    },

    'create-spec.bemjson.js-node' : function(tech, bundleNode, magicNode) {
        return this.setBemCreateNode(
            tech,
            this.level.resolveTech(tech),
            bundleNode,
            magicNode,
            true);
    },

    'create-phantomjs-node' : function(tech, bundleNode, magicNode) {
        var arch = this.ctx.arch,
            nodes = this.setBemCreateNode(
                tech,
                this.level.resolveTech(tech),
                bundleNode,
                magicNode,
                true,
                false);

        function getBorchikNodeId(file) {
            return PATH.join(PATH.dirname(file), '_' + PATH.basename(file));
        }

        ['css', 'spec.js'].forEach(function(tech) {
            var bundlePath = this.getBundlePath(tech);
            if(!arch.hasNode(bundlePath)) return;

            // NOTE: linking phantomjs node with optimised files, e.g. `_index.spec.js`,
            // so they would be built before PhantomJS would run.
            arch.link(getBorchikNodeId(bundlePath), nodes);
        }, this);

        return nodes;
    },

    'create-spec.js+browser.js+bemhtml-node' : function(tech, bundleNode, magicNode) {
        return this.setBemBuildNode(
            tech,
            this.level.resolveTech(tech),
            this.getBundlePath('deps.js'),
            bundleNode,
            magicNode,
            true);      // NOTE: override
    },

    'create-spec.js-optimizer-node' : function(tech, sourceNode, bundleNode) {
        return this.createBorschikOptimizerNode(
            process.env.ISTANBUL_COVERAGE?
                require.resolve('../borschik/istanbul') :
                'js',
            sourceNode, bundleNode);
    },

    'create-spec.js+browser.js+bemhtml-optimizer-node' : function() {
        return this['create-spec.js-optimizer-node'].apply(this, arguments);
    }

});

};
