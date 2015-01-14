var PATH = require('path'),
    BEM = require('bem'),
    Q = require('q'),
    QFS = require('q-io/fs'),
    U = BEM.util,
    createLevel = BEM.createLevel;

module.exports = function(registry) {

registry.decl('MetadocLevelNode', 'TargetLevelNode', {

    __constructor : function(o) {
        this.__base(o);
        this._bundleNodeClass = registry.getNodeClass(this.getBundleNodeClass());
        this._fileNodeClass = registry.getNodeClass('FileNode');
    },

    // NOTE: debug only!
//    make : function() {
//        return this.__base.apply(this, arguments)
//            .then(function() { console.log(this.ctx.arch.toString()) }.bind(this));
//    },

    alterArch : function() {
        var base = this.__base();
        return function() {
            return Q.when(base.call(this), function(level) {
                this.sources.forEach(function(item) {
                    this.createBundleNode(level, item);
                }, this);

                return Q.when(this.takeSnapshot('After MetadocLevelNode alterArch ' + this.getId()));
            }.bind(this));
        };
    },

    createBundleNode : function(level, item) {
        var arch = this.ctx.arch,
            opts = {
                root : this.root,
                level : this.path,
                item : item
            },
            BundleNode = this._bundleNodeClass,
            bundleNodeId = BundleNode.createId(opts),
            bundleNode;

        if(arch.hasNode(bundleNodeId)) {
            bundleNode = arch.getNode(bundleNodeId);
        } else {
            bundleNode = BundleNode.create(opts);
            arch.setNode(
                bundleNode,
                level,
                [this.getRealLevelNode().levelPath]);
        }

        var source = item.prefix + item.suffix;
        ~bundleNode.sources.indexOf(source) || bundleNode.sources.push(source);

        if(!arch.hasNode(source)) {
            arch.setNode(
                this._fileNodeClass.create({ root : this.root, path : source }),
                bundleNode);
        }

        return bundleNode;
    },

    getBundleNodeClass : function() {
        return 'MetadocSourceNode';
    }

}, {

    createName : function(o) {
        return o.item.block;
    }

});

registry.decl('MetadocSourceNode', 'GeneratedFileNode', {

    __constructor : function(o) {
        this.__base(U.extend({ path : this.__self.createPath(o) }, o));
        this.rootLevel = createLevel(o.root);
        this.sources = o.sources || [];
    },

    make : function() {
        var path = this.getPath();
        return this.getSourcesContent()
            .then(this.processContent.bind(this))
            .then(function(content) { return U.writeFile(path, content) });
        //.then(function() { console.log(this.ctx.arch.toString() )}.bind(this));
    },

    getSourcesContent : function() {
        var content = this.sources.map(function(path) {
            return QFS.read(PATH.resolve(this.root, path));
        }, this);

        return Q.all(content).then(function(content) {
            return content;
        });
    },

    processContent : function(content) {
        return content.join('\n');
    }

}, {

    createId : function(o) {
        return this.createPath(o);
    },

    createPath : function(o) {
        return PATH.join(o.level, this.createNodePrefix(o.item) + '.metadoc.json');
    },

    createNodePrefix : function(o) {
        return U.bemKey(o);
    }

});

};
