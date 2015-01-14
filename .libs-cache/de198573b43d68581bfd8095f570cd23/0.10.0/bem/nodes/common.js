var FS = require('fs'),
    PATH = require('path'),
    BEM = require('bem'),
    U = BEM.util,
    createLevel = BEM.createLevel;

module.exports = function(registry) {

registry.decl('GeneratedLevelNode', 'MagicNode', {

    __constructor : function(o) {
        this.level = createLevel(PATH.resolve(o.root, o.level));
        this.rootLevel = createLevel(o.root);
        this.item = o.item;

        this.__base(U.extend({ path : this.__self.createPath(o) }, o));

        this._realLevelNode = null;
        this.levelPath = null;

        this.outputDir = o.level;
        this.outputName = this.__self.createName(o);
    },

    make : function() {
        return this.ctx.arch.withLock(this.alterArch(), this);
    },

    alterArch : function() {
        var ctx = this.ctx;

        return function() {
            var arch = ctx.arch,
                path = this.path;

            if(arch.hasNode(path)) {
                return arch.getNode(path).getId();
            }

            var levelNode = registry
                .getNodeClass('FileNode')
                .create({ root : this.root, path : path });

            arch
                .setNode(levelNode, arch.getParents(this))
                .setNode(this.getRealLevelNode(), levelNode);

            return levelNode.getId();
        };
    },

    useFileOrBuild : function(node) {
        if(FS.existsSync(node.getLevelPath())) {
            var fileNode = registry.getNodeClass('FileNode').create({
                root : this.root,
                path : node.levelPath
            });

            // FIXME: we're simulate `BemCreateLevelNode`'s API for `FileNode`'s instance here
            fileNode.levelPath = node.levelPath;
            fileNode.getLevelPath = fileNode.getPath.bind(fileNode);

            return fileNode;
        }

        return node;
    },

    getRealLevelNode : function() {
        if(!this._realLevelNode) {
            this._realLevelNode = this.useFileOrBuild(
                registry.getNodeClass('BemCreateLevelNode').create({
                    root : this.root,
                    output : this.outputDir,
                    name : this.outputName,
                    proto : this.getProtoLevelPath()
                }));
            this.levelPath = this._realLevelNode.levelPath;
        }
        return this._realLevelNode;
    },

    getProtoLevelName : function() {
        return 'bundles';
    },

    getProtoLevelPath : function() {
        return PATH.join(
            U.findLevel(this.getPath(), 'project'),
            '.bem/levels',
            this.getProtoLevelName());
    }

}, {

    createId : function(o) {
        return this.__base({ path : this.createPath(o) });
    },

    createPath : function(o) {
        return this.createNodePrefix(U.extend({}, o));
    },

    createNodePrefix : function(o) {
        return PATH.join(o.level, this.createName(o));
    },

    createName : function(o) {
        var item = o.item,
            name = item.block,
            pt;

        if(pt = item.elem) {
            name += '__' + pt;
        }

        if(pt = item.mod) {
            name += '_' + pt;
            if(pt = item.val) {
                name += '_' + pt;
            }
        }

        return name;
    }

});

};
