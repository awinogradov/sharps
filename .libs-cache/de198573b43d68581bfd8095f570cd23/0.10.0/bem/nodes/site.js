var PATH = require('path'),
    BEM = require('bem'),
    Q = require('q'),
    QFS = require('q-io/fs'),
    MD = require('marked'),
    U = BEM.util;

module.exports = function(registry) {

registry.decl('SetNode', {

    'create-site-node' : function(item, sourceNode, setNode, aliasSetNode) {
        var LevelNodeClass = registry.getNodeClass('SiteLevelNode'),
            arch = this.ctx.arch,
            opts = {
                root : this.root,
                level : this.path,
                item : {
                    block : this.item.block + '.' + this.tech
                },
                decl : []
            },
            levelNode = LevelNodeClass.createId(opts);

        if(arch.hasNode(levelNode)) {
            levelNode = arch.getNode(levelNode);
        } else {
            levelNode = LevelNodeClass.create(opts);
            arch.setNode(levelNode, aliasSetNode, [sourceNode, setNode]);
        }

        (levelNode.sources || []).push(item);

        /*
        var IndexNodeClass = registry.getNodeClass('SiteIndexNode'),
            arch = this.ctx.arch,
            opts = {
                root : this.root,
                level : this.level,
                item : this.item
            },
            indexNode = IndexNodeClass.createId(opts);

        if(!arch.hasNode(indexNode)) {
            indexNode = IndexNodeClass.create(opts);
            arch.setNode(indexNode, aliasSetNode);
        }
        */

        return this.createLevelNode(item, sourceNode, setNode, 'SiteItemLevelNode');
    }

});

registry.decl('SiteLevelNode', 'GeneratedLevelNode', {

    __constructor : function(o) {
        this.sources = o.sources || [];
        this.__base(o);
    },

    alterArch : function() {
        var base = this.__base(),
            arch = this.ctx.arch;

        return function() {
            return Q.when(base.call(this), function(level) {
                var realLevel = PATH.join(level, '.bem/level.js'),
                    BundleNode = registry.getNodeClass(this.getBundleNodeClassName()),
                    opts = {
                        root   : this.root,
                        level  : this.path,
                        item   : { block : 'index' },
                        sources : this.getSources()
                    };

                if(!arch.hasNode(BundleNode.createId(opts))) {
                    arch.setNode(BundleNode.create(opts), level, [this, realLevel]);
                }

                return;
            }.bind(this));
        };
    },

    getSources : function() {
        var keys = {},
            key,
            index,
            item,
            tech;

        return this.sources.reduce(function(sources, t) {
            key = U.bemKey(t);

            if(!keys[key]) {
                item = {
                    block : t.block,
                    elem : t.elem,
                    mod : t.mod,
                    val : t.val,
                    techs : [],
                    suffixes : []
                };
                keys[key] = (index = sources.push(item) - 1);
            }

            item = sources[keys[key]];
            tech = t.tech;

            if(!~item.techs.indexOf(tech)) {
                item.techs.push(tech);
                item.suffixes.push(t.suffix);
            }

            return sources;
        }, []);
    },

    getBundleNodeClassName : function() {
        return 'SiteIndexNode';
    }

});

registry.decl('SiteIndexNode', 'BundleNode', {

    __constructor : function(o) {
        this.sources = o.sources;
        this.__base(o);
    },

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js'
        ];
    },

    createTechNode : function(tech, bundleNode, magicNode) {
        if(tech === 'bemjson.js') {
            return this.setSourceItemNode(tech, bundleNode, magicNode);
        }
        return this.__base.apply(this, arguments);
    },

    setSourceItemNode : function(tech, bundleNode, magicNode) {
        var arch = this.ctx.arch,
            node = this.createSourceNode(tech);

        bundleNode && arch.addParents(node, bundleNode);
        magicNode && arch.addChildren(node, magicNode);

        return node;
    },

    createSourceNode : function(tech) {
        var sourceNode = new (registry.getNodeClass('SiteIndexSourceNode'))({
                root : this.root,
                path : this.getNodePrefix() + '.' + tech,
                sources : this.sources
            }),
            node = this.useFileOrBuild(sourceNode);

        this.ctx.arch.setNode(node);

        return node;
    }

});

registry.decl('SiteIndexSourceNode', 'GeneratedFileNode', {

    __constructor : function(o) {
        this.sources = o.sources;
        this.__base(o);
    },

    make : function() {
        var path = this.getPath(),
            content = '(' + JSON.stringify(this.getIndexContent(), null, 2) + ')';

        return QFS.makeTree(PATH.dirname(path))
            .then(function() {
                return U.writeFileIfDiffers(path, content);
            }.bind(this));
    },

    getIndexContent : function() {
        return {
            block : 'site-index',
            data : this.sources
        };
    }

});

registry.decl('SiteItemLevelNode', 'MetadocLevelNode', {

    getBundleNodeClass : function() {
        return 'SiteSourceNode';
    }

}, {

    createName : function(o) {
        return o.item.block;
    }

});

registry.decl('SiteSourceNode', 'MetadocSourceNode', {

    processContent : function(content) {
        return JSON.stringify({ content : MD(content) }, null, 2);
    }

}, {

    createPath : function(o) {
        return PATH.join(o.level, this.createNodePrefix(o.item) + '.site.json');
    }

});

};
